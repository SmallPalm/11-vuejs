<template>
  <div>
    <h1>Category页面</h1>
    <button @click="btnClick(1111)">点击</button>
  </div>
</template>


<script>
import ComMixin from "../mixins/com-mixin.js"
export default {
  name: "category",
    mixins: [ComMixin],
}
</script>


<style scoped></style>