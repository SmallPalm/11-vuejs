<template>
  <div>
    <h1>Counter</h1>
    <h2>{{ modelValue }}</h2>
    <button @click="btnClick">+</button>
  </div>
</template>


<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      count: 1
    }
  },
  emits: ['update:modelValue'],
  methods: {
    btnClick() {
      this.$emit("update:modelValue", 1000)
    }
  }
}
</script>


<style scoped></style>