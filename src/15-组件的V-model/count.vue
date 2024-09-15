<template>
  <div>
    <h1>Counter</h1>
    <h2>{{ countkk }}</h2>
    <button @click="btnClick">+</button>
  </div>
</template>


<script>
export default {
  props: {
    countkk: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      count: 1
    }
  },
  emits: ['update:countkk'],
  methods: {
    btnClick() {
      this.$emit("update:countkk", 1000)
    }
  }
}
</script>


<style scoped></style>