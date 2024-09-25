<script>
import axios from 'axios';
import {ref} from 'vue'
export default {
  data() {
    return {
      datas:ref({
        nama:'',
        email:'',
        text:''
      })
    }
  }
}
</script>

<template>
    <div class="costumerService">
        <h1 class="judul">contact costumers service</h1>
        <form class="formContent">
            <div class="col">
                <label for="nama">nama</label>
                <input type="text" v-model="datas.nama">
            </div>
            <div class="col">
                <label for="email">email</label>
                <input type="text" v-model="datas.email">
            </div>
            <div class="col">
                <label for="text">text</label>
                <input type="text" v-model="datas.text">
            </div>
            <div class="btn">
                <button>submit</button>
                <button>cancel</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.gambar{
    width: 50%;
    border: 1px solid gray;
    height: 150px;
}
.costumerService{
    width:100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.judul{
    margin-bottom: 30px;
    text-transform: capitalize;
    font-size: 2.5em;
    font-weight: 900;
}
.formContent{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
}
.col{
    padding: 0 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.col label{
    font-size: 1.5em;
    font-weight: 300;
}
.col input{
    width: 100%;
    padding: 6px 25px;
}
.btn{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
}
.btn button{
    padding: 8px 50px;
    text-transform: capitalize;
    font-size: 1em;
    background-color: orange;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.btn button:hover{
    opacity: .8;
}
</style>