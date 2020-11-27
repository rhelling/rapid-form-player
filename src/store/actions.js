import { getFormDefinition } from '../services/formservice'
import { SET_FORM_DEFINITION, SET_FORM_FIELD_VALUE } from './mutation-types'

export const actions = {
  fetchFormDefinition({ commit }, { formDefinitionId }) {
    const formDefinition = getFormDefinition(formDefinitionId)
    commit(SET_FORM_DEFINITION, formDefinition)
  },
  updateField({ commit }, { fieldKey, value }) {
    commit(SET_FORM_FIELD_VALUE, { fieldKey, value })
  }
}
