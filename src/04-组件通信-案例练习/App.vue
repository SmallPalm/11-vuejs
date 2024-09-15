<template>
  <div>
    <tab-control :title="titles" @count="content"></tab-control>
    <h1>{{ pageContent[count] }}</h1>
  </div>
</template>


<script>
import TabControl from './components/TabControl.vue';
export default {
  components:{TabControl},
  data(){
    return{
      count:1,
      titles:["衣服", "鞋子", "裤子"],
      pageContent:["衣服页面", "鞋子页面", "裤子页面"]
    }
  },
  methods:{
    content(index){
      this.count = index
    }
  }
}
</script>


<style scoped>

</style>