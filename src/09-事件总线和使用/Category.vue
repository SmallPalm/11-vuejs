<template>
  <div>
    <h2>category</h2>
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
    btnCateClick(){
      console.log("在Category中监听Btn事件")
    }
  },
  created(){
    Emitt.on('btnClick', this.btnCateClick)
  },
  unmounted(){
    console.log("CateGory组件被销毁了"),
    Emitt.off("btnClick",this.btnCateClick)
  }
}
</script>


<style scoped>

</style>