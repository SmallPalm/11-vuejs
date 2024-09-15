<template>
  <div id="app">
    <show-info :name="'limingyu'" :age="20" :height="1.77" address="邯郸图书馆"></show-info>
    <show-info :name="'lijingyu'" :age="14" :height="1.58"></show-info>

    <show-info></show-info>
  </div>
</template>


<script>
import ShowInfo from './components/ShowInfo.vue'
export default {
  components:{
    ShowInfo
  },
  data(){
    return{
      count:1
    }
  }
}
</script>


<style scoped>

</style>