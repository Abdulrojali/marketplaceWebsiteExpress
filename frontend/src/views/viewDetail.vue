<script>
import axios from 'axios'
import {ref} from 'vue'
export default{
    data(){
        return{
            dataID:this.$route.params.id,
            responseData:ref(''),
            qtyData:''
        }
    },
    methods:{
        async getAllOrder(){
            await axios.get(`http://localhost:8080/products/${this.dataID}`)
            .then((res)=>this.responseData=res.data)
            .catch((err)=>console.log(err))
        },
        back(){
            this.$router.push('/order')
        }
    },
    mounted(){
        this.getAllOrder()
    }
}
</script>

<template>
    <div class="container">
        <button class="back" @click="back">back</button>
        <div class="content">
            <h1>{{ responseData.name }}</h1>
            <h5>Rp. {{ responseData.price }}</h5>
            <p>{{ responseData.deskripsi }}</p>
            <input type="number" name="" id="" v-model="qtyData" placeholder="qty">
            <button>buy</button>
        </div>
    </div>
</template>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.container{
    display: flex;
    justify-content: center;
    align-items:center;
}
.content{
    margin: 10% 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
h1{
    text-transform:capitalize;
    font-size: 2em;
}
.back{
    position: absolute;
    top: 15%;
    left: 50px;
    padding: 6px 10px;
}
</style>