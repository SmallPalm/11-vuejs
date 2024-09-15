<template>
  <div id="app">
    <!-- 1.input v-model -->
    <!-- <input type="text" v-model="count">
    <input type="text" :value="count" @input="$event.target.value"> -->

    <!-- 组件的v-model:默认的v-model -->
    <!-- <counter v-model="count"></counter> -->
    <!-- 本质 modelValue:内层定义的固定的 -->
    <!-- <counter :modelValue="count" @update:modelValue="count = $event"></counter>
    <h2>{{ count }}</h2> -->


    <!-- 组件的v-model:自定义名称 -->
    <count v-model:countkk="count"></count>
  </div>
</template>


<script>
import Counter from './Counter.vue'
import count from './count.vue'
export default {
  components: { Counter, count },
  data() {
    return {
      count: 111111
    }
  }
}
</script>


<style scoped></style>