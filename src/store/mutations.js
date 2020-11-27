import { SET_FORM_DEFINITION } from './mutation-types'

export const mutations = {
  [SET_FORM_DEFINITION](state, { name, dictionary, state: formState, steps, fieldSets, fields }) {
    state.name = name
    state.dictionary = dictionary
    state.steps = steps
    state.fieldSets = fieldSets
    state.fields = fields
    state.formState = formState
  }
}
