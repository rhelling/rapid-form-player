<template>
    <ul>
      <li v-for="(step, stepIndex) in steps" :key="stepIndex">{{step.name}}</li>
    </ul>
</template>

<script>
export default {
  name: 'RapidFormStepIndiction',
  props: {
    steps: {
      required: true,
      type: Array
    }
  }
}
</script>