/**
 * Created by Administrator on 2018/1/20 0020.
 */
import http from '@/service'

export default {
  //家属订单模板上传成功后将家属订单模板导入到服务端
  importPrisonerOrders: ({commit}, regs) =>
    http.importPrisonerOrders(regs).then(res => res.code === 200 && commit('importPrisonerOrders', res)).catch(err => console.log(err))
}