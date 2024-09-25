<script>
import axios from 'axios'
import { ref } from 'vue'
import componentsChildOrder from '@/components/componentsChildOrder.vue'
export default {
  data() {
    return {
      dataOrder:ref(''),
      dataMapping: ref('')
    }
  },
  methods: {
    async getAllOrder() {
      await axios
        .get('http://localhost:8080/order')
        .then((res) => (this.dataOrder =res.data))
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.getAllOrder()
  },
  components:{
    componentsChildOrder
  }
}
</script>
<template>
  <div class="order">
    <h1>list order</h1>
    <div class="datas"  >
      <componentsChildOrder 
       v-for="(data,index) in dataOrder"
      :idDataOrder="data.productId"
      ></componentsChildOrder>
    </div>
  </div>
</template>

<style scoped>
.order {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
h1{
  font-size: 2.5em;
  font-weight: 800;
  text-transform: capitalize;
}

.datas {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  grid-gap: 20px;
}
</style>
