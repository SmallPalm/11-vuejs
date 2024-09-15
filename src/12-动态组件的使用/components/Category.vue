<template>
  <div>
    <h1>Category页面</h1>
    <button @click="btnClick(1111)">点击</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  emits: ["btnClick"],
  methods: {
    btnClick(count) {
      console.log("BtnClick")
      this.$emit("btnClick", count)
    }
  }
}
</script>


<style scoped></style>