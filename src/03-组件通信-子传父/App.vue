<template>
  <div>
    <h1>当前计数:{{ count }}</h1>
    <add-counter @add="AddCount"></add-counter>
    <end-counter @end="EndCount"></end-counter>
  </div>
</template>


<script>
import AddCounter from './components/AddCounter.vue'
import EndCounter from './components/EndCounter.vue'

export default {
  components:{AddCounter, EndCounter},
  data(){
    return{
      count:1
    }
  },
  methods:{
    EndCount(counts){
      this.count -= counts
    },
    AddCount(counts){
      this.count += counts
    }
  }
}
</script>


<style scoped>

</style>