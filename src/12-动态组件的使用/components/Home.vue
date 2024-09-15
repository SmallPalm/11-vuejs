<template>
  <div>
    <h1>Home页面</h1>
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
    btnClick() {
      console.log("BtnClick")
      this.$emit("btnClick", "124r123")
    }
  }
}
</script>


<style scoped></style>