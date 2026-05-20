let prescriptionState = {
  dirty: false,
  generated: false
};

function markPrescriptionDirty() {
  prescriptionState.dirty = true;
  prescriptionState.generated = false;
}

function markPrescriptionGenerated() {
  prescriptionState.dirty = false;
  prescriptionState.generated = true;
}

function invalidatePrescriptionOutputs() {
  prescriptionState.generated = false;
}