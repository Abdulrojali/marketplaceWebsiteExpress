<template>
    <div class="col">
         <h2>{{ fakturData.name }}</h2>
        <b>{{ fakturData.price }}</b>
        <p>{{ fakturData.deskripsi }}</p>
    </div>
</template>
<script>
import axios from 'axios'
import {ref} from 'vue'
export default{
    data(){
        return{
            datas:'',
            fakturData:ref('')
        }
    },
    props:{
      idFaktur:{
        type:String,
      }
    },
    methods:{
        async getAllDataFaktur(){
            await axios.get(`http://localhost:8080/products/${this.idFaktur}`)
            .then((res)=>this.fakturData=res.data)
            .catch((err)=>console.log(err))
        }
    },
    mounted(){
        this.getAllDataFaktur()
    }
}
</script>


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
.col h2{
    font-size: 2em;
}
.col b{
    font-size: 1em;
    font-weight: 600;
}
.col p{
    font-size: .5em;
    font-weight: 150;
}
</style>
