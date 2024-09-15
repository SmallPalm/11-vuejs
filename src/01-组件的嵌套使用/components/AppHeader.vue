<template>
  <div  id="app-header">
    <h1>top header</h1>
    <input type="text">
    <h2>nav</h2>
  </div>
</template>


<script>
export default {
  data(){
    return{
      count:1
    }
  }
}
</script>


<style scoped>
#app-header{
  background-color: #f00;
  margin-bottom: 10px;
}
</style>