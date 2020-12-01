<template>
    <ul>
      <li v-for="(step, stepIndex) in steps" :key="stepIndex">{{step.name}}</li>
    </ul>
</template>

<script>
export default {
  name: 'RapidFormStepIndication',
  props: {
    steps: {
      required: true,
      type: Array
    }
  }
}
</script>
