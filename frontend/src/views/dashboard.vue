<script>
import navigasiComponent from '../components/navigasi.vue'
import { RouterView } from 'vue-router'
export default {
  data() {},
  components: {
    navigasiComponent
  }
}
</script>

<template>
  <div class="dashboard">
    <navigasiComponent></navigasiComponent>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.dashboard {
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  display:grid;
  grid-template-columns: 20% auto;
}
</style>
