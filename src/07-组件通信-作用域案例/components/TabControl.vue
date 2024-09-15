<template>
  <div class="tab">
    <!-- <ul>
      <li>衣服</li>
      <li>衣服</li>
      <li>衣服</li>
    </ul> -->
    <template v-for="(item, index) in title" :key="index" >
      <div @click="cutclick(index)" :class="{active: index === count}">
        <!-- 将item传递给slot -->
        <slot :item="item">
          <span>{{item}}</span> 
        </slot>
        
      </div>
    </template>

  </div>
</template>


<script>
export default {
  props:{
    title:{
      type:Array,
      default:() => []
    }
  },
  data(){
    return{
      count:0
    }
  },
  methods:{
    cutclick(index){
      this.count = index
      // console.log(this.count)
      this.$emit("count", index)
    }
  },
  emits:["count"]
}
</script>


<style scoped>
.tab{
  display: flex;
  height: 50px;
}
.tab div{
  flex: 1;
  text-align: center;
  
  font-weight: 700;
} 

.tab div span{
  padding: 6px;
}
.active{
  color:#f00;
}
.active span{
  border-bottom:3px solid #f00;
}
</style>
