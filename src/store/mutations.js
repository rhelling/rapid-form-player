import { SET_FORM_DEFINITION } from './mutation-types'

export const mutations = {
  [SET_FORM_DEFINITION](state, { formDefinition }) {
    state.formDefinition = formDefinition
  }
}
