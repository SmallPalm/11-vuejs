<template>
  <div>
    <h1>About页面</h1>
    <h2>{{ name }} ++ {{ age }}</h2>
    <button @click="btnClick()">点击</button>
  </div>
</template>


<script>
export default {
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