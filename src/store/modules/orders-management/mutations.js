/**
 * Created by Administrator on 2018/1/20 0020.
 */
export default {
  //家属订单模板上传成功后将家属订单模板导入到服务端
  importPrisonerOrders: (state, prisonerOrdersResult) => state.prisonerOrdersResult = prisonerOrdersResult
}
