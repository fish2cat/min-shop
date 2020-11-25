<template>
  <div>
    <swiper :imgList='imgList'></swiper>
    <!-- 九宫格 -->

    <ul class='mui-table-view mui-grid-view mui-grid-9'>
      <li class='mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3'>
        <a href='#'>
          <img src='../assets/images/menu1.png'>
          <div class='mui-media-body'>新闻资讯</div>
        </a>
      </li>
      <li class='mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3'>
        <a href='#'>
          <img src='../assets/images/menu2.png'>
          <div class='mui-media-body'>图片分享</div>
        </a>
      </li>
      <li class='mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3'>
        <a href='#'>
          <img src='../assets/images/menu3.png'>
          <div class='mui-media-body'>商品购买</div>
        </a>
      </li>
      <li class='mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3'>
        <a href='#'>
          <img src='../assets/images/menu4.png'>
          <div class='mui-media-body'>留言反馈</div>
        </a>
      </li>
      <li class='mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3'>
        <a href='#'>
          <img src='../assets/images/menu5.png'>
          <div class='mui-media-body'>视频专区</div>
        </a>
      </li>
      <li class='mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3'>
        <a href='#'>
          <img src='../assets/images/menu6.png'>
          <div class='mui-media-body'>联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import swiper from '../components/Swiper.vue'
export default {
  components: { swiper },
  data () {
    return {
      imgList: []
    }
  },

  methods: {
    async getSwipeImgList () {
      this.$Indicator.open('加载中...')
      const { data: res } = await this.$http.get('/imglist')
      this.$Indicator.close()
      console.log(res)
      if (res.code === 0) {
        this.$Toast('加载轮播图失败')
      } else this.imgList = res.data
    }
  },
  created () {
    this.getSwipeImgList()
  }
}
</script>
<style scoped>

  .mui-table-view-cell img{
    width: 60px;
    height: 60px;
  }
  .mui-grid-view.mui-grid-9{
    background: white;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border:0ch;
  }
</style>
