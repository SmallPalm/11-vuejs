<template>
  <div>
    <h1>About页面</h1>
    <h2>{{ name }} ++ 当前计算:{{ age }}</h2>
    <button @click="btnClick()">点击</button>
    <button @click="age++">+1</button>
    <button @click="age--">-1</button>
  </div>
</template>


<script>
import ComMixin from "../mixins/com-mixin.js"
export default {
  name: "about",
  mixins: [ComMixin],
  props: {
    name: {
      type: String,
      default: ""
    },
    age: {
      type: Number,
      default: 0
    }
  },
  created() {
    console.log("About组件被创建了")
  },
  unmounted() {
    console.log("About组件被销毁了")
  },

  // 对于使用keep-alive不会在监听到创建组件和销毁组件时
  // keep-alive提供了两个函数
  // 进入活跃状态:创建组件created
  activated() {
    console.log("About组件进入了活跃状态")
  },
  // 离开活跃状态:销毁组件unmounted
  deactivated() {
    console.log("About组件离开了活跃状态")
  }
}
</script>


<style scoped></style>