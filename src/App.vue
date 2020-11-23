<template>
  <div id="app" class="app-container">
    <!-- 顶部区域
    中间：路由占位
    底部：tabbar -->
    <mt-header fixed title="旺旺微商城"></mt-header>
    <h2>中间内容</h2>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email"
          ><span class="mui-badge">9</span></span
        >
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
  </div>
</template>
<script>
</script>

<style scoped>
.app-container {
  padding-top: 40px;
}
</style>
