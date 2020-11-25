<template>
  <div>
    <swiper :imgList="imgList"></swiper>
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
<style>
</style>
