const DEFAULT_PRESCRIPTION_MODEL = {
  ordonnanceType: "simple",

  objectifs: [],

  activites: [],

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