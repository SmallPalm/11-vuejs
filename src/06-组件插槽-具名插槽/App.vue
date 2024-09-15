<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div>返回</div>
      </template>
      <template v-slot:center>
        <span>搜索</span> 
      </template>
      <template v-slot:right>
        <a href="#">登录</a>
      </template>

    </nav-bar>


    <nav-bar>
      <!-- 动态插槽名 -->
      <template v-slot:[position]>
        <button>你好</button>
      </template>
    </nav-bar>
    <button @click="position = 'left'">left</button>
    <button  @click="position = 'center'">center</button>
    <button  @click="position = 'right'">right</button>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue';
export default {
  components:{NavBar},
  data(){
    return{
      count:1,
      position:"center"
    }
  }
}
</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>