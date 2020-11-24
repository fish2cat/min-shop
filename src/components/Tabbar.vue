<template>
  <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item" to="/home">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item" to="/category">
      <span class="mui-icon mui-icon-person"></span>
      <span class="mui-tab-label">分类</span>
    </router-link>
    <router-link class="mui-tab-item" to="/shopcard">
      <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
        <span class="mui-badge">9</span>
      </span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link class="mui-tab-item" to="/user">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">我的</span>
    </router-link>
  </nav>
</template>

<script>
export default {
}
</script>
<style>
/* .router-link-exact-active {
  color: lightblue !important;
} */
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>
