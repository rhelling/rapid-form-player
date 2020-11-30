<template>
    <fieldset>
      <label>{{ fieldDefinition.label }}</label>
      <component :is="componentType" v-model="fieldValue" />
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
    fieldValue: {
      get() {
        return this.getFieldValue(this.fieldDefinition.key)
      },
      set(event) {
        const value = this.getValueFromEvent(event)
        this.updateField({value ,fieldKey: this.fieldDefinition.key})
      }
    },
    componentType() {
      return componentTypeMap(this.fieldDefinition.type)
    }
  },
  methods: {
    ...mapActions(['updateField']),
    getValueFromEvent(event) {
      return event.target.value || event.target.checked
    }
  }
}
</script>