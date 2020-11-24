<template>
  <div id="app" class="app-container">
    <!-- 顶部区域
    中间：路由占位
    底部：tabbar -->
    <mt-header fixed title="旺旺微商城"></mt-header>
    <!-- <h1>中间内容</h1> -->
    <router-view></router-view>
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
  </div>
</template>
<script>
</script>

<style scoped>
.app-container {
  padding-top: 40px;
}
.router-link-exact-active  {
  color: lightblue ! important;
}
</style>
