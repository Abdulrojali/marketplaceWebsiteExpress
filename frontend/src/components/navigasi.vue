<script>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
export default {
  data() {
    return {
      navigasiLinks: [
        { name: 'home', path: '/home' },
        { name: 'order', path: '/order' },
        { name: 'faktur', path: '/faktur' },
        { name: 'costumer Service', path: '/costumerService' },
        { name: 'tambah Barang', path: '/tambahBarang' }
      ],
      data: ref({
        search: ''
      })
    }
  },
  methods: {
    Logout() {
      this.$router.push('/')
    }
  }
}
</script>
<template>
  <div class="navigasi">
    <h2 class="judul">navigasi</h2>
    <div class="content">
      <RouterLink class="col" v-for="(data, index) in navigasiLinks" :to="data.path">{{
        data.name
      }}</RouterLink>
    </div>
    <div class="session2">
      <b @click="Logout">logout</b>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.navigasi {
  padding: 20px 5px;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  background-color: rgb(241, 170, 39);
  text-transform: capitalize;
  font-weight: bold;
  color: black;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.col {
  font-size: 1em;
  font-weight: 800;
  text-transform: capitalize;
  text-decoration: none;
  color: black;
  font-weight: 250;
  cursor: pointer;
}
.col:hover {
  opacity: 0.8;
}
b {
  cursor: pointer;
}
b:hover {
  opacity: 0.8;
}
i {
  font-size: 1.1em;
}
.search {
  display: flex;
  gap: 15px;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 25px;
  overflow: hidden;
}

button {
  border: none;
  background-color: none;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
.session2{
  display: flex;
  flex-direction: column;
}
</style>
