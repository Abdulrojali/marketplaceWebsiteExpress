<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
  data() {
    return {
      datas: ref({
        nama: '',
        age: '',
        alamat: '',
        mail: '',
        username: '',
        password: ''
      })
    }
  },
  methods: {
    async createAccount() {
      const fetchCreateAccount = await axios.post('http://localhost:8080/createAccounts', {
        namaUser: this.datas.nama,
        umurUser: this.datas.age,
        alamatUser: this.datas.alamat,
        mailUser: this.datas.mail,
        usernameUser: this.datas.username,
        passwordUser: this.datas.password
      })
      if (fetchCreateAccount) {
        this.$router.push('/')
      } else {
        alert('invalid create Accounts')
      }
    },
    cancel() {
      this.$router.push('/')
    },
    backtoLogin() {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 class="judul">create Accounts</h1>
    <div class="content">
      <div class="heading1">
        <h2>welcome to create Account</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus qui odit nobis ab,
          labore voluptates, eaque id at optio accusamus ratione, nihil atque! Eaque, consequatur.
        </p>
        <button @click="backtoLogin">back</button>
      </div>
      <form @submit.prevent="createAccount" method="post">
        <div class="col">
          <label for="nama">nama</label>
          <input type="text" v-model="datas.nama" />
        </div>
        <div class="col">
          <label for="age">age</label>
          <input type="text" v-model="datas.age" />
        </div>
        <div class="col">
          <label for="address">address</label>
          <input type="text" v-model="datas.alamat" />
        </div>
        <div class="col">
          <label for="email">email</label>
          <input type="text" v-model="datas.mail" />
        </div>
        <div class="col">
          <label for="username">username</label>
          <input type="text" v-model="datas.username" />
        </div>
        <div class="col">
          <label for="password">password</label>
          <input type="text" v-model="datas.password" />
        </div>
        <div class="btn">
          <button type="submit">registers</button>
          <button @click="cancel">cancel</button>
        </div>
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
  padding: 0 20px;
  background-color: rgb(241, 170, 39);
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
}
.heading1 h1 {
  font-size: 1.5em;
  font-weight: bold;
  text-transform: capitalize;
}
.heading1 p {
  font-size: 0.5em;
  font-weight: 180;
}
input {
  border: none;
  border-bottom: 1px solid gray;
}
.heading1 button {
  cursor: pointer;
  margin-top: 15px;
  padding: 6px 10px;
  border-radius: 5px;
  background-color: rgb(241, 170, 39);
  color: black;
  width: 80px;
  border: 1px solid black;
}
.heading1 button:hover {
  background-color: white;
  border: none;
}
.container {
  padding: 20px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
}
.judul {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 2.5em;
}
form {
  text-transform: capitalize;
  font-weight: bold;
  color: black;
  padding: 30px;
  width: 100%;
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
  padding: 5px 10px;
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
  border: 1px solid gray;
  color: black;
}
.btn button:hover {
  opacity: 0.8;
}
</style>
