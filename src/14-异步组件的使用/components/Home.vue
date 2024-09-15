<template>
  <div>
    <h1>Home页面</h1>
  </div>
</template>


<script>
export default {
  name: "Home",
  data() {
    return {
      count: 1
    }
  },
  emits: ["btnClick"],
  methods: {
    btnClick() {
      console.log("BtnClick")
      this.$emit("btnClick", "124r123")
    }
  },
  created() {
    console.log("Home组件被创建了")
  },
  unmounted() {
    console.log("Home组件被销毁了")
  },
}
</script>


<style scoped></style>