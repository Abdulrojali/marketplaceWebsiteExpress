<script>
export default {
  data() {
    return {}
  }
}
</script>

<template>
  <div class="list">
    <button>asus</button>
    <button>zenofo</button>
    <button>asus</button>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.list {
  padding: 15px 0;
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
}
.list button {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 5px 1px gray;
  text-transform: capitalize;
  font-weight: 900;
  color: white;
  background-color: orange;
}
.list button:hover {
  opacity: 0.8;
}
</style>
