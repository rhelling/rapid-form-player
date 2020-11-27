import { SET_FORM_DEFINITION, SET_FORM_FIELD_VALUE } from './mutation-types'

export const mutations = {
  [SET_FORM_DEFINITION](state, { name, dictionary, state: formState, steps, fieldSets, fields }) {
    state.name = name
    state.dictionary = dictionary
    state.steps = steps
    state.fieldSets = fieldSets
    state.fields = fields
    state.formState = formState
  },
  [SET_FORM_FIELD_VALUE](state, { fieldKey, value }) {
    state.formData[fieldKey] = value
  }
}
