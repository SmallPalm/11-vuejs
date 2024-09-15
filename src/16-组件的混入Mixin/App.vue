  <template>
  <div>
    <template v-for="item in array" :key="item">
      <button @click="btnClick(item)" :class="{ active: item === currentItem }">
        {{ item }}
      </button>
    </template>


    <keep-alive include="about, category,home">
      <component name="limngyu" :age="20" :is="currentItem" @btnClick="cateClick">
      </component>
    </keep-alive>
  </div>
</template>


<script>

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Category from "./components/Category.vue";

export default {
  components: { Home, About, Category},
  data() {
    return {
      count: 1,
      array: ["Home", "About", "Category"],
      currentIndex: 0,
      currentItem: "Home"
    };
  },
  methods: {
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