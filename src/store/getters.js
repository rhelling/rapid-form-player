export const getters = {
  formDefinition(state) {
    return state.formDefinition
  },
  name(state) {
    return state.name
  },
  steps(state) {
    return state.steps
  },
  activeStepName(state) {
    return `step-${state.formState['step.active'] + 1}`
  },
  activeFieldSets(state, getters) {
    return state.fieldSets.filter((f) => f.step === getters.activeStepName)
  },
  getFields(state) {
    return (fieldSet) => state.fields.filter((field) => field.fieldSet === fieldSet)
  },
  getFieldValue(state) {
    return (fieldKey) => state.formData[fieldKey]
  },
  formState(state) {
    return state.formState
  }
}
