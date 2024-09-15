<template>
  <div>
    <home>
      <h1>{{ message }}</h1>
    </home>

    <button @click="isShow = !isShow">显示隐藏Category</button>
    <category v-if="isShow"></category>
  </div>
</template>


<script>
import Home from './Home.vue'
import Emitt from './utils/mitt'
import Category from './Category.vue'
export default {
  components:{ Home ,Category},
  data(){
    return{
      count:1,
      message:"理科几个",
      isShow:true
    }
  },

// 在组件创建完成时的生命周期中编写

created(){
  Emitt.on("btnClick", (name)=>{
    console.log("监听到HomeBanner文件中事件的点击", name)
    this.message = `${name}`
  })
}
}
</script>


<style scoped>

</style>