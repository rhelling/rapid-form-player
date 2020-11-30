<template>
  <div id="app">
    <RapidFormPlayer form-definition-id="request-product" component-map="componentMap" />
  </div>
</template>

<script>
import RapidFormPlayer from './components/RapidFormPlayer'

export default {
  name: 'App',
  components: {
    RapidFormPlayer
  },
  computed: {
    componentMap() {
      return {
        
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
