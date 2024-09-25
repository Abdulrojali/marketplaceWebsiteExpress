<script>
import axios from 'axios'
import {ref} from 'vue'
export default{
    data(){
        return{
          dataAllOrder:ref(''),
        }
    },
    props:{
      idDataOrder:{
        type:String,
        required:true
      }  
    },
    methods:{
      async getAllOrder(){
    await axios.get(`http://localhost:8080/products/${this.idDataOrder}`)
    .then((Res)=>this.dataAllOrder=Res.data)
    .catch((err)=>console.log(err))
      },
      async postFaktur(id){
        const postfaktur =await axios.post(`http://localhost:8080/faktur/${id}`)
        if(postfaktur){
          this.$router.push('/faktur')
        }
        else{
          window.location.href()
        }
      },
      // async viewBarang(id){
      //   this.$router.push(`/viewDetail/${id}`)
      // }
    },
    mounted(){
      this.getAllOrder()
    }
}
</script>
<template>
  <div class="content">
      <div class="col">
    <h1>{{ dataAllOrder.name }}</h1>
    <p>{{ dataAllOrder.deskripsi }}</p>
    <div class="btn">
      <button @click="postFaktur(dataAllOrder._id)">order</button>
      <!-- <button @click="viewBarang(dataAllOrder._id)">view detail</button> -->

    </div>
  </div>
    </div>
</template>
<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.col{
  box-shadow: 0 0 2px 1px gray;
  padding: 6px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.col button{
  padding:8px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: orange;
  font-weight: 670;
  text-transform: capitalize;
  cursor: pointer;
}
.col button:hover{
  opacity: .8;
}
</style>