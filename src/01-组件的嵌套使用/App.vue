<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>


<script>
import AppHeader from '../components/AppHeader.vue'
import AppContent from "../components/AppContent.vue"
import AppFooter from '../components/AppFooter.vue'
export default {
  components:{
    AppHeader,
    AppContent,
    AppFooter
  },
  data(){
    return{
      count:1
    }
  }
}
</script>


<style scoped>

</style>
