<template>
  <div>
<home-banner></home-banner>
  </div>
</template>


<script>
import HomeBanner from './HomeBanner.vue';
export default {
  components: { HomeBanner },
  data(){
    return{
      count:1
    }
  }
}
</script>


<style scoped>

</style>