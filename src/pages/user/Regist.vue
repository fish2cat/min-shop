<template>
  <div class="reg-con">
    <mt-field
      label="账号"
      :state="isNameChked"
      placeholder="请输入账号"
      v-model="regist.username"
    ></mt-field>
    <mt-field
      label="密码"
      :state="isPwdChked"
      placeholder="请输入密码"
      type="password"
      v-model="regist.password"
    ></mt-field>
    <mt-field
      label="确认"
      :state="isPwdAgainChked"
      placeholder="请输入密码"
      type="password"
      v-model="pwdAgain"
    ></mt-field>
    <mt-field
      label="邮箱"
      :state="isEmailChked"
      placeholder="请输入邮箱"
      v-model="regist.email"
    ></mt-field>
    <div class="button-con">
    <mt-button type="primary" size="large" @click="reg" >注册</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      regist: {
        username: '',
        password: '',
        email: ''
      },
      pwdAgain: '',
      isNameChked: 'error',
      isPwdChked: 'error',
      isPwdAgainChked: 'error',
      isEmailChked: 'error'
    }
  },
  watch: {
    'regist.username' (newVal) {
      if (newVal.length >= 4 && newVal.length <= 12) {
        this.isNameChked = 'success'
      } else {
        this.isNameChked = 'error'
      }
    },
    'regist.password' (newVal) {
      if (newVal.length >= 6 && newVal.length <= 8) {
        this.isPwdChked = 'success'
      } else {
        this.isPwdChked = 'error'
      }
    },
    pwdAgain (newVal) {
      if (newVal === this.regist.password) {
        this.isPwdAgainChked = 'success'
      } else {
        this.isPwdAgainChked = 'error'
      }
    },
    'regist.email' (newVal) {
      if (newVal.length >= 6 && newVal.length <= 20) {
        this.isEmailChked = 'success'
      } else {
        this.isEmailChked = 'error'
      }
    }
  },
  methods: {
    reg () {
      if (this.isNameChked === 'error') {
        this.$Toast('账号长度4-12位')
      } else if (this.isPwdChked === 'error') {
        this.$Toast('密码长度6-8位')
      } else if (this.isPwdAgainChked === 'error') {
        this.$Toast('确认密码与密码相同')
      } else if (this.isEmailChked === 'error') {
        this.$Toast('邮箱长度6-20位')
      } else {
        this.$Indicator.open({ text: '注册中' })
        // 前端格式校验通过，本项目的数据格式校验放在服务器端
        // 异常的处理方式：
        // 第一种：then的第一个方法定义成功的回调方法
        // then的第二个方法定义失败的回调方法
        // 第二种：添加catch进行异常捕获
        this.$http.post('/register', this.regist).then(res => {
          this.$Indicator.close()
          if (res.data.code === 0) {
            this.$Toast(res.data.msg)
          } else {
            // 保存用户信息 实现自动登录
            this.$store.commit('user/setUser', res.data.data)
            this.$auth.setAuthorization(res.data.data.session_id)
            this.$Toast(res.data.msg)
            this.$router.replace('/user')
          }
        }).catch(() => {
          this.$Indicator.close()
          this.$Toast('注册失败')
        })
      }
    }
  }
}
</script>

<style>
  .reg-con{
    margin:20px;
  }
  .button-con{
    margin-top: 10px;
  }
</style>
