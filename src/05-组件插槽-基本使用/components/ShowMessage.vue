<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="slot">
      <slot>
        <!-- 默认插槽 -->
        <h3>默认插槽</h3>
      </slot>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      count:1,
      title:"slot插槽"
    }
  }
}
</script>


<style scoped>

</style>