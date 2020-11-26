<template>
  <div class="mui-content">
    <form class="mui-input-group">
      <div class="mui-input-row">
        <label>账号</label>
        <input v-model='login.username' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
      </div>
      <div class="mui-input-row">
        <label>密码</label>
        <input v-model='login.password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
      </div>
    </form>
    <div class="mui-content-padded">
      <button @click='log' type="button" class="mui-btn mui-btn-block mui-btn-primary">登录</button>
      <div class="link-area"><a href="#" @click.prevent='regist'>还没有账号？去注册></a></div>
    </div>
    <div class="mui-content-padded oauth-area">
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
      }
    }
  },
  methods: {
    regist () {
      this.$router.push('/user/regist')
    },
    log () {

    }
  },
  watch: {
    'login.username' (newValue){
      if(newValue.length < 6 || newValue.length > 12)
        this.$Toast('加载轮播图失败')
    },
  }
}
</script>

<style scoped>
/* 新增加的样式，主要用于让输入框占满整个页面 覆盖body的白色背景 */
  .mui-content{
    position:absolute;
    width:100%;
    height:100%;
  }
  .area {
    margin: 20px auto 0px auto;
  }
  .mui-input-group {
    margin-top: 10px;
  }
  .mui-input-group:first-child {
    margin-top: 20px;
  }
  .mui-input-group label {
    width: 22%;
  }
  .mui-input-row label~input,
  .mui-input-row label~select,
  .mui-input-row label~textarea {
    width: 78%;
  }
  .mui-checkbox input[type=checkbox],
  .mui-radio input[type=radio] {
    top: 6px;
  }
  .mui-content-padded {
    margin-top: 25px;
  }
  .mui-btn {
    padding: 10px;
  }
  .link-area {
    display: block;
    margin-top: 25px;
    text-align: center;
  }
  .spliter {
    color: #bbb;
    padding: 0px 8px;
  }
  .oauth-area {
    position: absolute;
    bottom: 20px;
    left: 0px;
    text-align: center;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
  .oauth-area .oauth-btn {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: 30px 30px;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0px 20px;
    /*-webkit-filter: grayscale(100%); */
    border: solid 1px #ddd;
    border-radius: 25px;
  }
  .oauth-area .oauth-btn:active {
    border: solid 1px #aaa;
  }
  .oauth-area .oauth-btn.disabled {
    background-color: #ddd;
  }
</style>
