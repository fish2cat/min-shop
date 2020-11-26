<template>
  <div class="input-container">
    <mt-field
      label="账号"
      :state="isNameChked"
      placeholder="请输入账号"
      v-model="login.username"
    ></mt-field>
    <mt-field
      label="密码"
      :state="isPwdChked"
      placeholder="请输入密码"
      type="password"
      v-model="login.password"
    ></mt-field>
    <mt-button type="primary" size="large" @click="log" >登录</mt-button>
    <div class="text_container">
      <a href="#" @click.prevent="regist">还没有账号？前往注册</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        username: '',
        password: ''
      },
      isNameChked: 'error',
      isPwdChked: 'error'
    }
  },
  methods: {
    regist () {
      this.$router.push('/user/regist')
    },
    async log () {
      if (this.isNameChked === 'success' && this.isPwdChked === 'success') {
        const { data: res } = await this.$http.post('/login', this.login)
        console.log(res)
        if (res.code === 0) {
          this.$Toast('登录失败' + res.msg)
        } else {
          // 登录成功
          console.log(res.data)
          this.$store.commit('user/setUser', res.data)
          this.$auth.setAuthorization(res.data.session_id)
          this.$Toast(res.msg)
          this.$router.replace('/user')
        }
      } else {
        this.$Toast('账号4-12位，密码6-8位')
      }
    }
  },
  watch: {
    'login.username' (newValue) {
      if (newValue.length >= 4 && newValue.length <= 12) {
        this.isNameChked = 'success'
      } else {
        this.isNameChked = 'error'
      }
    },
    'login.password' (newValue) {
      if (newValue.length >= 6 && newValue.length <= 8) {
        this.isPwdChked = 'success'
      } else {
        this.isPwdChked = 'error'
      }
    }
  }
}
</script>

<style scoped>

.input-container{
  margin: 20px;
}
.text_container{
  margin: 50px;
  text-align: center;
}
</style>
