(function () {
    "use strict";

    function escapeHtml(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function decodeKnownEntities(value) {
        return String(value ?? "")
            .replace(/&nbsp;/gi, "\u00a0")
            .replace(/&amp;/gi, "&")
            .replace(/&lt;/gi, "<")
            .replace(/&gt;/gi, ">")
            .replace(/&quot;/gi, '"')
            .replace(/&#0?39;/gi, "'");
    }

    function renderSafeLink(
        href,
        label
    ) {
        let parsedUrl;

        try {
            parsedUrl =
                new URL(href);
        } catch {
            return null;
        }

        if (
            parsedUrl.protocol !== "http:" &&
            parsedUrl.protocol !== "https:"
        ) {
            return null;
        }

        return (
            `<a ` +
            `class="pap-cognitive-ux-inline-link" ` +
            `href="${escapeHtml(parsedUrl.href)}" ` +
            `target="_blank" ` +
            `rel="noopener noreferrer" ` +
            `style="display:inline;color:inherit;text-decoration:underline;">` +
            `${escapeHtml(decodeKnownEntities(label))}` +
            `</a>`
        );
    }

    function renderSafeInfoButton(
        information
    ) {
        return (
            `<button ` +
            `type="button" ` +
            `class="info-trigger info-hitbox" ` +
            `data-info="${escapeHtml(
                decodeKnownEntities(
                    information
                )
            )}">` +
            `<span class="info-icon">i</span>` +
            `</button>`
        );
    }

    const allowedFragmentPattern =
        /<a\s+href=(['"])(https?:\/\/[\s\S]*?)\1\s+target=(['"])_blank\3\s+rel=(['"])noopener noreferrer\4(?:\s+style=(['"])[\s\S]*?\5)?\s*>([\s\S]*?)<\/a>|<button\s+type=(['"])button\7\s+class=(['"])info-trigger info-hitbox\8\s+data-info=(['"])([\s\S]*?)\9\s*>\s*<span\s+class=(['"])info-icon\11\s*>\s*i\s*<\/span>\s*<\/button>/gi;

    function renderClinicalCognitiveMessageHtml(
        value
    ) {
        const source =
            String(value ?? "");

        if (!source) {
            return "";
        }

        let rendered = "";
        let lastIndex = 0;
        let match;

        allowedFragmentPattern.lastIndex = 0;

        while (
            (
                match =
                    allowedFragmentPattern.exec(
                        source
                    )
            ) !== null
        ) {
            rendered +=
                escapeHtml(
                    source.slice(
                        lastIndex,
                        match.index
                    )
                );

            if (match[2] !== undefined) {
                const safeLink =
                    renderSafeLink(
                        match[2],
                        match[6]
                    );

                rendered +=
                    safeLink ||
                    escapeHtml(match[0]);
            } else {
                rendered +=
                    renderSafeInfoButton(
                        match[10]
                    );
            }

            lastIndex =
                allowedFragmentPattern.lastIndex;
        }

        rendered +=
            escapeHtml(
                source.slice(lastIndex)
            );

        return rendered;
    }

    window
        .renderClinicalCognitiveMessageHtml =
        renderClinicalCognitiveMessageHtml;

    window
        .escapeClinicalCognitiveMessageHtml =
        escapeHtml;
})();
