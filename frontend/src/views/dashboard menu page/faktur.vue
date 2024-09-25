<template>
  <div class="container">
    <h1 class="judul">list faktur</h1>
    <div class="content">
     <listfaktur  v-for="(data,index) in datas" :key="index" 
     :idFaktur="data.orderId"></listfaktur>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import axios from 'axios';
import listfaktur from '@/components/listfaktur.vue';
export default{
  data(){
    return{
      datas:ref('')
    }
  },
  components:{
    listfaktur
  },
  methods:{
    async getFaktur(){
      await axios.get(`http://localhost:8080/faktur`)
      .then((res)=>this.datas=res.data)
      .catch((err)=>console.log(err))
    }
  },
  mounted(){
    this.getFaktur()
  }
}
</script>


<style scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.judul{
  font-size: 2em;
  font-weight: 850;
  text-transform: capitalize;
}
.container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
.content{
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  grid-gap: 10px;
}
</style>