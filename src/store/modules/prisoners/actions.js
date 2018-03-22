import http from '@/service'

export default {
  // 获取服刑人员信息
  getPrisoners({ commit }, regs) {
    // let start = (regs.draw - 1) * regs.length// 计算从第几条数据开始取
    // Object.assign(regs, {'start': start})
    http.getPrisoners(regs).then(res => res.code === 200 && commit('getPrisoners', res)).catch(err => console.log(err))
  }
}
