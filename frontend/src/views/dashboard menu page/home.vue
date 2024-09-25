<script>
import bannerImg from '@/components/bannerImg.vue'
import axios from 'axios'
import { ref } from 'vue'
export default {
  data() {
    return {
      marketplace: ref([])
    }
  },
  components: {
    bannerImg,
  },
  methods: {
    async buyProduct(id) {
      const newOrder = await axios.post(`http://localhost:8080/order/${id}`)
      if (newOrder) {
        this.$router.push('/order')
      } else {
        alert('failed to add new order')
      }
    },
    async getProducts() {
      await axios
        .get(`http://localhost:8080/products`)
        .then((res) => (this.marketplace = res.data))
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<template>
  <div class="home">
    <!-- <bannerImg></bannerImg> -->
     <h1>all products</h1>
    <div class="content">
      <div class="col" v-for="(data, index) in marketplace" :key="index">
        <img :src="data.img" alt="" />
        <h1>{{ data.name }}</h1>
        <i id="charts" class="fa-solid fa-cart-plus" @click="buyProduct(data._id)"></i>
      </div>
    </div>
    <!-- <h2>{{ localStorageOrders }}</h2> -->
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.content {
  padding: 20px 20px;
  width: 75%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 25px;
}
.col {
  box-shadow: 0 0 10px 1px gray;
  padding: 15px;
}
.col img {
  display: inline-block;
  width: 100%;
  height: 100px;
  object-fit: contain;
  margin-bottom: 15px;
}
.col h1 {
  font-size: 1em;
  text-transform: capitalize;
  margin-bottom: 5px;
}
.col p {
  font-size: 0.8em;
}

#id {
  padding:8px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 670;
  font-size: 1.25em;
  margin-top: 30px;
  text-transform: capitalize;
  cursor: pointer;
  color: black;
}
#id:hover {
  opacity: 0.8;
}
</style>
