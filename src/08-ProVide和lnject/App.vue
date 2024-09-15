<template>
  <div>
    <home></home>
    <button @click="message = '恐怕芒果味'">修改message</button>
  </div>
</template>


<script>
import Home from './Home.vue';
import { computed } from 'vue'
export default {
  components:{ Home },
  data(){
    return{
      count:1,
      message:"理科几个"
    }
  },
  // provide一般都是写成函数
  provide() {
      return {
      name: "limingyu",
      age: 20,
      message: computed(() => this.message)
    }
  }
}
</script>


<style scoped>

</style>