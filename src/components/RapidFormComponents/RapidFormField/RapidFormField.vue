<template>
    <fieldset>
      <label>{{ fieldDefinition.label }}</label>
      <!-- remark:  v-model bindings do not work with dynamic components and native html inputs -->
      <!-- <component :is="componentType" v-model="fieldValue" /> --->
      <input v-model="fieldValue" />
    </fieldset>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { componentTypeMap } from './ComponentTypeMap'

export default {
  name: 'RapidSubFormField',
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
      set(value) {
        this.updateField({value ,fieldKey: this.fieldDefinition.key})
      }
    },
    componentType() {
      return componentTypeMap(this.fieldDefinition.type)
    }
  },
  methods: {
    ...mapActions(['updateField'])
  }
}
</script>
