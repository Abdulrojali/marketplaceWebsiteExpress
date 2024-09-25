<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
  data() {
    return {
      datas: ref({
        username: '',
        password: ''
      })
    }
  },
  methods: {
    async loginAccount() {
      const loginAuth = await axios.post('http://localhost:8080/login', {
        user: this.datas.username,
        pass: this.datas.password
      })
      if (loginAuth) {
        this.$router.push('/menu')
      } else {
        alert('invalid loginAccount')
      }
    },
    createAccount() {
      this.$router.push('/createAccounts')
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 class="judul">loginPage</h1>
    <div class="content">
      <div class="heading1">
        <h1 class="marketplaceHeading">marketplace</h1>
      </div>
      <form @submit.prevent="loginAccount" method="post">
        <div class="col">
          <label for="username">username</label>
          <input type="text" v-model="datas.username" />
        </div>
        <div class="col">
          <label for="password">password</label>
          <input type="password" v-model="datas.password" />
        </div>
        <div class="btn">
          <button type="submit">login</button>
          <button @click="">cancel</button>
        </div>
        <b
          >belum punya account? <b class="anchor" href="" @click="createAccount">buat account</b></b
        >
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.content {
  display: grid;
  width: 60%;
  grid-template-columns: 50% 50%;
  border-radius: 5px;
  box-shadow: 0 0 5px 2px gray;
}
.heading1 {
  background-color: rgb(241, 170, 39);
  display: flex;
  justify-content: center;
  align-items: center;
}
.marketplaceHeading {
  font-size: 2.5em;
  font-weight: 800;
  text-transform: capitalize;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.judul {
  position: absolute;
  top: 50px;
  left: auto;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 2.5em;
}
form {
  text-transform: capitalize;
  font-weight: bold;
  color: black;
  padding: 100px 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* box-shadow:0 0 1px 1px gray; */
  border-radius: 5px;
}
b {
  font-size: 0.9em;
  font-weight: 250;
}
.anchor {
  font-size: 0.9em;
  cursor: pointer;
  color: blueviolet;
}
.col {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.col input {
  padding: 3px 10px;
  border: none;
  border-bottom: 1px solid black;
  cursor: pointer;
}
.btn {
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn button {
  background-color: white;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;
}
.btn button:hover {
  opacity: 0.8;
}
</style>
