<template>
  <div>
    <button @click="EndClick(1)">-1</button>
    <button @click="EndClick(5)">-5</button>
    <button @click="EndClick(10)">-10</button>
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
    EndClick(counts){
      //  让子组件中的事件发送出去一个自定义事件
      //  第一个参数:定义自定义事件的名称
      //  第二个参数:传递事件中的参数
      this.$emit("end", counts)
    }
  }
}
</script>


<style scoped>

</style>