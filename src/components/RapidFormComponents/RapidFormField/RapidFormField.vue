<template>
    <fieldset>
      <label>{{ fieldDefinition.label }}</label>
      <component :is="componentType" @input="updateFieldValue" :value="fieldValue" />
    </fieldset>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { componentTypeMap } from './ComponentTypeMap'

export default {
  name: 'RapidSubForm',
  props: {
    fieldDefinition: {
      required: true,
      type: Object
    }
  },
  computed: {
    ...mapGetters(['getFieldValue']),
    fieldValue() {
      return this.getFieldValue(this.fieldDefinition.key)
    },
    componentType() {
      return componentTypeMap(this.fieldDefinition.type)
    }
  },
  methods: {
    ...mapActions(['updateField']),
    updateFieldValue(event) {
      this.updateField({fieldKey: this.fieldDefinition.key, value: event.target.value})
    }
  }
}
</script>