<template>
  <div id="Banner">
    <h2>Banner</h2>
  </div>
</template>


<script>
export default {
  data(){
    return{
      count:1
    }
  },
  methods:{
    foo(){
      console.log("在父组件中可以主动的调用子组件的对象方法")
      // 组件实例还有两个属性
      console.log(this.$parent) //获取父元素
      console.log(this.$root) //获取根组件
    }
  }
}
</script>


<style scoped>

</style>