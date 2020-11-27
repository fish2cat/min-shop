<template>
  <div class="goods-info">
      <!-- 图片 -->
      <div class="mui-card">
         <!-- vw：视窗宽度的百分比（1vw 代表视窗的宽度为 1%） -->
        <div class="mui-card-header mui-card-media" :style="{height:'40vw','background-image':'url('+goodsinfo.album+')'}">
        </div>
      </div>
      <!-- 购买信息 -->
      <div class="mui-card">
        <div class="mui-card-header">{{goodsinfo.name}}
        </div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品价格：{{ goodsinfo.price }}</p>
            <div v-if="goodsinfo.num">
            <p >购买数量
              <numbox initcount="1" :max="goodsinfo.num" :goodsid="goodsinfo.id" @count="countChange"></numbox>
            </p>
            <!-- <p> -->
              <span>
                <button type="button" class="mui-btn mui-btn-primary btnmargin" @click="buy">立即购买</button>
                <button type="button" class="mui-btn mui-btn-danger btnmargin" @click="addShopcart">加入购物车</button>
              </span>
            <!-- </p> -->
            </div>
          </div>
        </div>
      </div>
      <!-- 商品参数 -->
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品卖点：{{ goodsinfo.sell_point }}</p>
            <p>商品库存：{{ goodsinfo.num }}</p>
            <p>上架时间：{{ goodsinfo.create_time }}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import numbox from '@/components/numbox.vue'
export default {
  props: ['id'],
  data () {
    return {
      goodsinfo: {},
      selectedCount: 1
    }
  },
  methods: {
    getGoodsInfo () {
      this.$Indicator.open('加载中...')
      this.$http.get('/goodsinfo', { params: { id: this.id } }).then(res => {
        this.$Indicator.close()
        console.log(res.data)
        if (res.data.code === 0) {
          this.$Toast(res.data.msg)
        } else {
          this.goodsinfo = res.data.data
        }
      }).catch(err => {
        this.$Indicator.close()
        this.$Toast(err)
      })
    },
    countChange(goodsinfo) {
      // id: this.goodsid, count: count
      this.selectedCount = goodsinfo.count
    },
    buy() {

    },
    addShopcart() {

    }
  },
  created() {
    this.getGoodsInfo()
  },
  components: {
    numbox
  }
}
</script>
<style scoped>
.btnmargin{
  margin: 10px 5px;
}
</style>
