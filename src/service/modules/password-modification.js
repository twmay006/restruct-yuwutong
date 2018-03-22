import * as service from '../base/service'

export default {
  // 修改用户名密码执行的方法
  modifyPassword: userInfo =>
    service.post('/users/resetPwd', userInfo).then(res => res).catch(err => err)
}
