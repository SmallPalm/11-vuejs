<template>
  <div>
    <h1>{{message}}</h1>
  </div>
</template>


<script>
export default {
  data(){
    return{
     message:"Home组件"
    }
  },
    // 6.卸载组件-> 卸载VNode -> 卸载DOM元素 -> DOM更新
  // 6.1被销毁之前
  beforeUnmount(){
    console.log("组件被销毁之前-beforeUnmount")
  },
// 6.2组件被销毁时
  unmounted(){
    console.log("组件被销毁时-unmounted")
  }
}
</script>


<style scoped>

</style>