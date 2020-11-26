<template>
  <div class="member">
    <div
      v-if="isLogin"
      class="header-con"
    >
      <div class="user-info">
        <div class="avatar">
          <img
            src="../assets/images/avatar_default.png"
            class="image-info"
          >
        </div>
        <div class="person-con">
          {{username}}
        </div>
      </div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <a href="#">
            <img
              class="mui-media-object mui-pull-left"
              src="../assets/images/avatar_default.png"
            >
            <div class="mui-media-body">
              我的订单
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="#">
            <img
              class="mui-media-object mui-pull-left"
              src="../assets/images/avatar_default.png"
            >
            <div class="mui-media-body">
              收货地址
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="#" @click.prevent="logout">
            <img
              class="mui-media-object mui-pull-left"
              src="../assets/images/avatar_default.png"
            >
            <div class="mui-media-body">
              退出登录
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div
      v-else
      class="header-con"
    >
      <router-link to="/user/login">
        <div class="user-info">
          <div class="avatar">
            <img
              src="../assets/images/avatar_default.png"
              class="image-info"
            >
          </div>
          <div class="person-con">
            <span>登录/注册</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      username: state => state.user.username
    }),
    ...mapGetters('user', { isLogin: 'isLogin' })
  },
  methods: {
    logout() {
      // const { data: res } = await this.$http.get('/logout')
      // if (res.code === 1) {
      //   this.$store.commit('user/logout')
      //   this.$auth.setAutharization('')
      //   this.$Toast(res.msg)
      // }
      this.$http.get('logout')
      this.$store.commit('user/logout')
      this.$auth.setAuthorization('')
      this.$Toast('退出系统')
    }
  }
}
</script>

<style scoped>
.header-con {
  padding: 10px;
  background-color: #fff;
}
.person-con {
  position: absolute;
  left: 130px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
}
.user-info {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 120px;
  background: linear-gradient(90deg,#28a2ff,#ffd787);
  box-shadow: 0 0.1rem 0.25rem #f8e3c6;
}
.avatar {
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,15);
  border: 1px solid hsla(0,0%,100%,.4);
  border-radius: 50% 50%;
}
.image-info {
  width: 100%;
  height: 100%;
  }

</style>
