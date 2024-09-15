<template>
  <div>
    <button @click="AddClick(1)">+1</button>
    <button @click="AddClick(5)">+5</button>
    <button @click="AddClick(10)">+10</button>
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
    AddClick(count){
      // 当我们在像父组件传递参数时使用$emit
      // 可以在组件中添加上名称
      this.$emit("add", count)
    }
  },
  // 定义组件内部发送出去的事件参数的名称方便于查找
  emits:["add"]
}
</script>


<style scoped>

</style>