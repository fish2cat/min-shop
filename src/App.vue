<template>
  <div id="app" class="app-container">
    <!-- 顶部区域
    中间：路由占位
    底部：tabbar -->
    <!-- <mt-header fixed title="旺旺微商城"></mt-header> -->

    <mt-header fixed :title="$route.meta.title">
      <mt-button icon="back" slot="left" @click="goBack" v-show="showBack"
        >返回</mt-button
      >
    </mt-header>
    <!-- <h1>中间内容</h1> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from './components/Tabbar.vue'
export default {
  created () {
    this.showBack = this.$route.path !== '/home'
  },
  data () {
    return {
      showBack: false
    }
  },
  watch: {
    '$route.path' (newVal) {
      this.showBack = newVal !== '/home'
    }
  },

  components: { tabbar },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.app-container {
  padding-top: 40px;
  background: white;
}
</style>
