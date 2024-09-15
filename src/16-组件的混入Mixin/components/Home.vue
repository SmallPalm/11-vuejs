<template>
  <div>
    <h1>Home页面</h1>
  </div>
</template>


<script>
import ComMixin from "../mixins/com-mixin.js"
export default {
  name: "Home",
  created() {
    console.log("Home组件被创建了")
  },
  mixins: [ComMixin],

  unmounted() {
    console.log("Home组件被销毁了")
  },
}
</script>


<style scoped></style>