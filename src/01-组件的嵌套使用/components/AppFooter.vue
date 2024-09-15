<template>
  <div id="app-footer">
    <ul>
      <li v-for="item in '福利派送'" :key="item">{{ item }}</li>
    </ul>
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
#app-footer{
  background-color: #00f;
  margin-top: 10px;
}

</style>