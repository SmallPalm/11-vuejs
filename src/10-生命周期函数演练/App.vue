<template>
  <div>
    <h1>AppContent</h1>

    <h2>{{ message }}</h2>
    <button @click="message = 'limingyu'">改变</button>

    <button @click="isToggle = !isToggle">toggle</button>
    <Home v-if="isToggle"></Home>
  </div>
</template>


<script>
import Home from './Home.vue'
export default {
  components:{ Home },
  data(){
    return{
      count:1,
      message:"Hello Vue",
      isToggle:true
    }
  },
  // 生命周期函数
  // 1.组件被创建之前
  beforeCreate(){
    console.log("组件被创建之前-beforeCreate")
  },

  // 2.组件被创建完成时
  created(){
    console.log("组件被创建完成-Created")
    console.log(this)
  },
  // 3.组件template准备被挂载
  beforeMount(){
    console.log("组件template准备被挂载-BeforeMount")
  },

  // 4.组件template已经被挂载
  mounted(){
    console.log("组件template已经被挂载-Mounted")
  },

  // 5.数据发生变化
  // 5.1改变DOM之前
  beforeUpdate(){
    console.log("改变DOM之前-BeforeUnmount")
  },
  // 5.2更新DOM后
  updated(){
    console.log("更新DOM后-updated")
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