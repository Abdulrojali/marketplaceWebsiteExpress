<script>
import bannerImg from '@/assets/bannerImg.jpg'
export default {
  data() {
    return {
      banner: bannerImg
    }
  }
}
</script>
<template>
  <img :src="banner" alt="" />
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
img {
  display: inline-block;
  width: 100%;
  height: 450px;
  object-fit: fill;
}
</style>
