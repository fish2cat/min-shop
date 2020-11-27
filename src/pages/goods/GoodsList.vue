<template>
  <div class="goods-list">
    <div class="good-item" v-for="item in goodslist" :key="item.id">
      <router-link :to="'/user/goodsinfo/'+item.id">
        <img :src="item.image">
        <h4 class="title">{{item.name}}</h4>
        <p class="info">
          <span class="price">&yen;{{item.price}}</span>
          <span class="sell">剩余{{item.num}}</span>
        </p>
      </router-link>
    </div>
    <mt-button class="more" v-if="goodslist.length !== 0" size="large" @click="getMore">
      加载更多
    </mt-button>
  </div>
</template>

<script>
export default {
  props: ['categoryId'],
  data () {
    return {
      goodslist: [],
      // 最后一个商品的id
      last_id: 0
    }
  },
  methods: {
    getGoodsByCate () {
      this.$Indicator.open('加载中...')
      this.$http.get('/goodslist', { params: { catagoryId: this.catagoryId, last_id: this.last_id } }).then(res => {
        this.$Indicator.close()
        console.log(res.data)
        if (res.data.code === 0) {
          this.$Toast(res.data.msg)
        } else if (res.data.data.length >= 1) {
          this.goodslist = res.data.data
          this.last_id = res.data.data[res.data.data.length - 1].id
        } else if (this.goodslist.length > 0) {
          this.$Toast('已经到达底部')
        } else {
          this.$Toast('该分类下没有商品')
        }
      }).catch(err => {
        this.$Indicator.close()
        this.$Toast(err)
      })
    },
    getMore() {
      this.getGoodsByCate()
    }
  },
  created () {
    this.getGoodsByCate()
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
}
.good-item{
  width: calc(calc(100% / 2) - 10px);
  margin: 10px 10px 0 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
}
img{
  width: 100%;
}
.title {
  font-size: 14px;
  color: #333;
  margin: 10px 0;
}
.info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
}
.price {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.sell {
  font-size: 13px;
}
.more {
  /* 加大底部按钮的下方的margin，以免被底部固定的面板遮挡 */
    margin: 20px 20px 80px 10px;
    font-size: 14px;
  }

</style>
