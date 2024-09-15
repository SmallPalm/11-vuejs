<template>
  <div>
    <h1>{{ name }}-{{ age }}-{{ message }}</h1>
  </div>
</template>


<script>
export default {
  data(){
    return{
      count:1
    }
  },
  inject:["name", 'age', "message"]
}
</script>


<style scoped>

</style>