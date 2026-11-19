// Libellés explicites des actions facultatives, indépendants des séances d'AP.
// Les identifiants sont stables pour les futures sorties documentaires.
const PAP_SEDENTARITE_ACTION_LABELS = Object.freeze({
  pause_debout: "Se lever et marcher lors de pauses dans les périodes assises",
  appel_marche: "Marcher pendant les appels téléphoniques lorsque cela est possible",
  deplacement_collegue: "Se déplacer pour échanger avec un collègue plutôt que rester assis",
  pause_ecran: "Faire une pause debout entre deux périodes passées devant un écran"
});

const DEFAULT_PRESCRIPTION_MODEL = {
  ordonnanceType: "simple",

  objectifs: [],

  activites: [],

  sedentarite: {
    actions: [],
    texteLibre: ""
  },

  messagesPatient: [],

  recommandations: [],

  limitations: [],

orientationAPA: {

  necessaire: false,

  criteres: [],

  orientations: [],

  commentaire: ""

},

  texteLibreFinal: "",

  metadata: {
    version: "1",
    dateCreation: "",
    modeSaisie: "",
    source: ""
  }
};

function createPrescriptionModel() {
  return structuredClone(DEFAULT_PRESCRIPTION_MODEL);
}