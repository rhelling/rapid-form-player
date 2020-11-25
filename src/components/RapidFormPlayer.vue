<template>
  <div v-if="formDefinition"> 
    <h1>{{ formDefinition.title }}</h1>
    <RapidSubForm />
  </div>
</template>

<script>
import { RapidSubForm } from './RapidFormComponents/RapidSubForm'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'RapidFormPlayer',
  components: {
    RapidSubForm
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
    ...mapGetters(['formDefinition'])
  },
  beforeMount() {
    this.fetchFormDefinition({formDefinitionId: this.formDefinitionId})
  }
}
</script>