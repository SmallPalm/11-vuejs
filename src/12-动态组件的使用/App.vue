<template>
  <div>
    <template v-for="item in array" :key="item">
      <!-- <button @click="btnClick(index)" :class="{ active: index === currentIndex }">
        {{ item }}
      </button> -->

      <!-- 优化做法 -->
      <button @click="btnClick(item)" :class="{ active: item === currentItem }">
        {{ item }}
      </button>
    </template>

    <!-- 第一种做法: v-if进行判断, 缺点:太多逻辑判断,如果组件过多不好编写 -->
    <!-- <template v-if="currentIndex === 0">
      <Home></Home>
    </template>
    <template v-if="currentIndex === 1">
      <About></About>
    </template>
    <template v-if="currentIndex === 2">
      <Category></Category>
    </template> -->


    <!-- 第二种做法:动态组件 -->
    <!-- <component :is="array[currentIndex]"></component> -->

    <!-- 优化 -->

    <!-- 动态组件传值 -->
    <component name="limngyu" :age="20" :is="currentItem" @btnClick="cateClick"></component>
  </div>
</template>


<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Category from "./components/Category.vue";

export default {
  components: { Home, About, Category },
  data() {
    return {
      count: 1,
      array: ["Home", "About", "Category"],
      currentIndex: 0,
      currentItem: "Home"
    };
  },
  methods: {
    // btnClick(index) {
    //   this.currentIndex = index;
    // },

    // 优化做法
    btnClick(item) {
      this.currentItem = item;
    },
    cateClick(arg) {
      console.log(arg)
    }
  },
};
</script>


<style scoped>
.active {
  color: #f00;
}
</style>