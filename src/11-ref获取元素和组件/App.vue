<template>
  <div id="app">
    <h2 ref="title" class="title" :style="{color:titleColor}">{{ message }}</h2>
    <button ref="btn" @click="btnClick">修改title</button>

    <banner ref="banner"></banner>
  </div>
</template>


<script>
import Banner from './Banner.vue'
export default {
  components:{Banner},
  data(){
    return{
      count:1,
      message:'Holle Vue',
      titleColor:"red"
    }
  },
  methods:{
    btnClick(){
      // 不要主动的去获取DOM, 并且修改DOM内容
      this.message = "李晶晶"
      this.titleColor = "blue"

      // 获取h2/button元素
      console.log(this.$refs.title)
      console.log(this.$refs.btn)

      // 获取banner的组件:拿到的一个组件实例
      console.log(this.$refs.banner)

      //在父组件中可以主动的调用子组件的对象方法
      this.$refs.banner.foo()

      // 获取banner组件中的元素,获取组件的根元素
      console.log(this.$refs.banner.$el)

      // 如果banner组件中有多个根, 会获取到node节点
      // 注意:开发中不推荐一个组件的template中有多个根元素
      console.log(this.$refs.banner.$el.nextElementSibling)



    }
  }
}
</script>


<style scoped>

</style>