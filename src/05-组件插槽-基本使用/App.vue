<template>
  <div>
    <h1>插槽</h1>
    <show-message>
      <h1>App组件插入</h1>
    </show-message>

    <show-message>
      <button>按钮</button>
    </show-message>

    <show-message>
      <a href="https://www.baidu.com">百度一下</a>
    </show-message>

    <show-message>
      <img src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/mantpl/img/news/video_play-dad4325811.png" alt="">
    </show-message>

    <show-message>
      
    </show-message>
  </div>
</template>


<script>
import ShowMessage from './components/ShowMessage.vue';


export default {
  components:{ShowMessage},
  data(){
    return{
      count:1
    }
  }
}
</script>


<style scoped>

</style>