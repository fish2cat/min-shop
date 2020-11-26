<template>
  <div>
    <div class="menu">
      <div class="menu-left">
        <ul class="mui-table-view" v-for="(menu,index) in menus" :key=index >
          <li class="mui-table-view-cell" :class="{current: index === currentIndex}" @click="currentIndex = index">{{menu.name}}</li>
        </ul>
      </div>
      <div
        class="menu-right"
        ref="itemList"
      >
      
      <!-- 右侧二级分类 -->
      <div v-if="menus[currentIndex]">
        <ul class="cate-item">
          <li v-for="(item, index2) in menus[currentIndex].sub" :key="index2" class="cate-item-li">
            <a>{{item.name}}</a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      menus: [],
      currentIndex: 0
    }
  },
  async created () {
    this.$Indicator.open({
      text: '加载中'
    })
    const { data: res } = await this.$http.get('/category')
    this.$Indicator.close()
    this.menus = res.data
    // console.log(this.menus)
  },
  methods: {
  }
}
</script>

<style scoped>
/* 去掉顶端及左侧的空隙 同时去掉项目标记. */
  ul {
  margin: 0;
  padding: 0;
  }
  li {
    list-style: none;
  }
  .menu {
    /* 弹性框 可变大小*/
  display: flex;
  /* position: absolute; */
  text-align: center;
  /* 将头部的标题让出来 */
  /* top: 40px; */
  /* 将下部的导航让出来 */
  /* bottom: 50px; */
  width: 100%;
  overflow: hidden;
  }
  .menu-left {
    /* 定义伸缩比 基础宽度80 */
    flex: 0 0 80px;
  }
  .menu-right {
    flex: 1;
    background: #fff;
  }
  .mui-table-view {
    height: 54px;
    width: 100%;
    background: #f3f5f7;
  }
  .mui-table-view-cell {
    width: 100%;
    line-height: 54px;
    margin-bottom: 0;
  }
  .current {
    width: 100%;
    background: #fff;
  }
  .current .text {
    color: red;
  }
  .cate-item {
    padding: 7px 10px 10px;
      display: flex;
      overflow: hidden;
      flex-flow: row wrap;
  }
  .cate-item-li {
        width: 33.3%;
  }
</style>
