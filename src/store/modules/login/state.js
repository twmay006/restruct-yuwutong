export default {
  // token: '', // 获取用户登录时的token
  users: JSON.parse(sessionStorage.getItem('users')), // 获取用户登录时的信息
  loginResult: {} // 获取用户登录的结果
}
