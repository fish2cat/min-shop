export default {
  namespaced: true, // 带命名空间的模块
  state: {
    id: 0,
    username: ''
  },
  getters: {
    isLogin (state) {
      return state.id !== 0
    }
  },
  mutations: {
    setUser (state, user) {
      state.id = user.id
      state.username = user.username
    },
    logout (state) {
      state.id = 0
      state.username = ''
    }
  }
}
