import { getFormDefinition } from '../services/formservice'
import { SET_FORM_DEFINITION } from './mutation-types'

export const actions = {
  fetchFormDefinition({ commit }, { formDefinitionId }) {
    const formDefinition = getFormDefinition(formDefinitionId)
    commit(SET_FORM_DEFINITION, { formDefinition })
  }
}
