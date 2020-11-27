<template>
  <div> 
    <h1>{{ name }}</h1>
    <ul>
      <li v-for="(step, stepIndex) in steps" :key="stepIndex">{{step.name}}</li>
    </ul>
    <template v-for="(fieldSet, fieldSetIndex) in activeFieldSets">
      <RapidFormFieldSet :key="fieldSetIndex"> 
        <template v-for="(field, fieldIndex) in getFields(fieldSet.key)" >
          <RapidFormField :field-definition="field" :key="fieldSetIndex + '_' +fieldIndex" />
        </template>
      </RapidFormFieldSet>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { RapidFormField, RapidFormFieldSet } from './RapidFormComponents'

export default {
  name: 'RapidFormPlayer',
  components: {
    RapidFormField,
    RapidFormFieldSet
  },
  props: {
    formDefinitionId: {
      required: true,
      type: String
    }
  },
  methods: {
    ...mapActions([
      'fetchFormDefinition'
    ])
  },
  computed: {
    ...mapGetters([
      'name',
      'formState', 
      'steps',
      'activeFieldSets',
      'getFields'
    ])
  },
  beforeMount() {
    this.fetchFormDefinition({formDefinitionId: this.formDefinitionId})
  }
}
</script>