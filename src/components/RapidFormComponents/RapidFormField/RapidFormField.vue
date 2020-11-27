<template>
    <fieldset>
      <label>{{ fieldDefinition.key }}</label>
      <input @input="updateFieldValue" :value="fieldValue" />
    </fieldset>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters(['getFieldValue']),
    fieldValue() {
      return this.getFieldValue(this.fieldDefinition.key)
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