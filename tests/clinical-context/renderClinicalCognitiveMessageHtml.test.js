"use strict";

const assert =
    require("assert");

global.window = global;

require(
    "../../core/clinical-context/renderClinicalCognitiveMessageHtml.js"
);

require(
    "../../core/clinical-context/renderClinicalCognitiveUxHtml.js"
);

const render =
    window
        .renderClinicalCognitiveMessageHtml;

assert.strictEqual(
    render(
        "Texte simple <test> & contrôle"
    ),
    "Texte simple &lt;test&gt; &amp; contrôle",
    "Le texte ordinaire doit rester échappé"
);

const linkResult =
    render(
        "Voir <a href='https://example.com/test' target='_blank' rel='noopener noreferrer' style='display:inline;color:inherit;text-decoration:underline;'>le lien</a>"
    );

assert(
    linkResult.includes(
        'href="https://example.com/test"'
    ),
    "Le lien HTTPS autorisé doit être rendu"
);

assert(
    linkResult.includes(
        'target="_blank"'
    )
);

assert(
    linkResult.includes(
        'rel="noopener noreferrer"'
    )
);

assert(
    linkResult.includes(
        ">le lien</a>"
    )
);

const infoResult =
    render(
        "AVQ <button type='button' class='info-trigger info-hitbox' data-info='Activités de la vie quotidienne'><span class='info-icon'>i</span></button>"
    );

assert(
    infoResult.includes(
        'class="info-trigger info-hitbox"'
    ),
    "Le bouton info autorisé doit être rendu"
);

assert(
    infoResult.includes(
        'data-info="Activités de la vie quotidienne"'
    )
);

assert(
    infoResult.includes(
        '<span class="info-icon">i</span>'
    )
);

const comparisonInfoResult =
    render(
        "Intensité <button type='button' class='info-trigger info-hitbox' data-info='FC <80-85% FCM'><span class='info-icon'>i</span></button>"
    );

assert(
    comparisonInfoResult.includes(
        'data-info="FC &lt;80-85% FCM"'
    ),
    "Les caractères spéciaux du data-info doivent être échappés"
);

const javascriptResult =
    render(
        "<a href='javascript:alert(1)' target='_blank' rel='noopener noreferrer'>dangereux</a>"
    );

assert(
    javascriptResult.includes(
        "&lt;a href="
    ),
    "Un protocole non autorisé doit rester du texte"
);

assert(
    !javascriptResult.includes(
        "<a "
    )
);

const unknownHtmlResult =
    render(
        "<script>alert(1)</script>"
    );

assert(
    unknownHtmlResult.includes(
        "&lt;script&gt;"
    )
);

assert(
    !unknownHtmlResult.includes(
        "<script>"
    )
);

const onclickResult =
    render(
        "<button onclick='alert(1)'>clic</button>"
    );

assert(
    onclickResult.includes(
        "&lt;button"
    )
);

assert(
    !onclickResult.includes(
        "<button "
    )
);

console.log(
    JSON.stringify(
        {
            result: "PASS",
            verified: {
                plainTextEscaped: true,
                safeHttpsLinkRendered: true,
                safeInfoButtonRendered: true,
                infoContentEscaped: true,
                javascriptLinkRejected: true,
                unknownHtmlRejected: true,
                eventHandlerRejected: true
            }
        },
        null,
        2
    )
);
