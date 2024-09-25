<script>
export default {
  props: {
    idBarang: {
      type: String,
      required: true
    }
  },
  methods: {
    buy() {
      console.log(idBarang)
    }
  }
}
</script>

<template>
  <button @click="buy">buy</button>
</template>

<style scoped>
button {
  margin-top: 5px;
  padding: 6px 25px;
  border-radius: 5px;
  border: none;
  background-color: rgb(241, 170, 39);
  color: white;
  cursor: pointer;
}
</style>
