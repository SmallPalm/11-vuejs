<template>
  <!-- 非props的属性默认传入到根元素上 -->
  <div id="show-info"  :class="$attrs.address">
    <h1>姓名: {{ name }}</h1>
    <h2>年龄: {{ age }}</h2>
    <h3>身高: {{ height }}</h3>
  </div>
</template>


<script>
export default {
  data(){
    return{
      count:1,
    }
  },
  // 作用: 接收父组件传递过来的属性
  // 1.props数组语法
  /**
   * 弊端
   * 1.不能对传递的类型进行验证
   * 2.没有默认值的
   * */ 
  // props:["name","age","height"]
// 禁用attribute继承
  inheritAttrs:false,
  // 2.props对象语法
  props:{
    name:{
      type:String,
      default:"kkkkkkkkkkk"
    },
    age:{
      type:Number,
      default:20
    },
    height:{
      // 多个可能的类型
      type:[Number, String],
      default:13
    },
    // 判断对象
    obj:{
      type:Object,
      // 对象或数组的默认值必须从一个工厂函数中返回出来
      default(){
        return {obj:"object"}
      }
    },
    // 判断函数
    foo:{
      type:Function,
      // 与对象或数组的默认值不同, 这不是一个工厂函数, 这是一个用做默认值的函数
      default(){
        return "minvej"
      }
    },
    // 判断数组
    // 原则:对象类型和数组类型在写默认值时, 需要使用efault的函数返回默认值
    arr:{
      type:Array,
      default:()=>{ ["alel","are"]}
    }
  }
}
</script>


<style scoped>

</style>