<template>
  <div id="app-content">
    <h2>banner</h2>
    <ul>
      <li v-for="item in '商品类别' " :key="item">{{ item }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  data(){
    return{
      count:1,
    }
  },
}
</script>


<style scoped>
#app-content{
  background-color: #0f0;
}
</style>