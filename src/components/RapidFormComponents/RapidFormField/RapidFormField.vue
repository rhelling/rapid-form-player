<template>
  <div>
    <input @input="updateFieldValue" :value="formFieldValue" />
   {{ fieldDefinition.key }} 
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RapidSubForm',
  props: {
    fieldDefinition: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      formFieldValue: undefined
    }
  },
  methods: {
    ...mapActions(['updateField']),
    updateFieldValue(value) {
      this.updateField({fieldKey: this.fieldDefinition.key, value})
    }
  }
}
</script>