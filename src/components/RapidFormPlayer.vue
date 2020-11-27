<template>
  <div> 
    <h1>{{ name }}</h1>
    <ul>
      <li v-for="(step, stepIndex) in steps" :key="stepIndex">{{step.name}}</li>
    </ul>
    <ul>
      <li v-for="(fieldSet, fieldSetIndex) in activeFieldSets" :key="fieldSetIndex"> 
        {{ fieldSet.key }}
        <template v-for="(field, fieldIndex) in getFields(fieldSet.key)" >
          <RapidFormField :field-definition="field" :key="fieldSetIndex + '_' +fieldIndex" />
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { RapidFormField } from './RapidFormComponents/RapidFormField'

export default {
  name: 'RapidFormPlayer',
  components: {
    RapidFormField
  },
  props: {
    formDefinitionId: {
      required: true,
      type: String
    }
  },
  methods: {
    ...mapActions(['fetchFormDefinition'])
  },
  computed: {
    ...mapGetters(['name', 'formState', 'steps', 'activeFieldSets', 'getFields'])
  },
  beforeMount() {
    this.fetchFormDefinition({formDefinitionId: this.formDefinitionId})
  }
}
</script>