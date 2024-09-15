<template>
  <div>
    <button @click="btnClick">点击</button>
  </div>
</template>


<script>
import Emitt from './utils/mitt'
export default {
  data(){
    return{
      count:1
    }
  },

  methods:{
    btnClick(){
      console.log("在btn中点击")
      // 事件总线:监听btn在组件中的点击
      // 给监听现在事件的人传递参数
      Emitt.emit("btnClick", '问问')
    }
  }
}
</script>


<style scoped>

</style>