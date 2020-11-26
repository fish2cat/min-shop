var auth = {
  getAuthorization () {
    return localStorage.getItem('Authorization')
  },
  setAuthorization (Authorization) {
    localStorage.setItem('Authorization', Authorization)
  }
}
export default auth
