<template>
  <div>
    <tab-control :title="titles" @count="content"></tab-control>
    <h1>{{ pageContent[count] }}</h1>

    <tab-control :title="titles" @count="content">
      <!-- 在template中编写v-slot:name -->
      <!-- v-slot: = # :简写-->
      <template #default="props">
        <button>{{props.item}}</button> 
      </template>
    </tab-control>
    
    <tab-control :title="titles" @count="content">
      <!-- props: 自己定义的:表示接受传递的容器 -->
      <!-- v-slot:name:接受slot标签传递的数据,属性 -->
      <template v-slot:default="props">
      <a href="#">{{props.item}}</a>
      </template>
    </tab-control>
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