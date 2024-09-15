<template>
  <div id="navBar">

    <div class="left">
      <!-- 添加插槽 -->
      <!-- 插槽默认有一个隐藏的名字:default -->
      <slot name="left">left</slot>
    </div>

    <div class="center">
      <slot name="center">center</slot>
    </div>
    
    <div class="right">
      <slot name="right">right</slot>
    </div>
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
#navBar{
  display: flex;
  text-align: center;
}
#navBar div{
  padding: 10px;
}
.left{
  width: 80px;
  background-color: #f00;
}
.center{
  flex:1;
  background-color: #0f0;
}
.right{
  width: 80px;
  background-color: #ff0;
}
</style>