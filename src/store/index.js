import Vue from 'vue'
import Vuex from 'vuex'
import breadCrumb from './modules/bread-crumb'
import jailsInformation from './modules/jails-information'
import common from './modules/common'
import passwordModification from './modules/password-modification'
import quillEditor from './modules/quill-editor'
import downloadFile from './modules/download-file'
import uploadFile from './modules/upload-file'
import uploadImg from './modules/upload-img'
import breadCrumbs from './modules/breadcrumb'

import adminAdvertisement from '@/views/admin-advertisement/vuex'
import adminFeedback from '@/views/admin-feedback/vuex'
import adminLog from '@/views/admin-log/vuex'
import adminPrison from '@/views/admin-prison/vuex'
import adminPrisonArea from '@/views/admin-prison-area/vuex'
import adminPrisonUser from '@/views/admin-prison-user/vuex'
import adminTerminal from '@/views/admin-terminal/vuex'
import adminVersion from '@/views/admin-version/vuex'
import adminWhitemember from '@/views/admin-whitemember/vuex'
import checkFamily from '@/views/check-family/vuex'
import checkMailbox from '@/views/check-mailbox/vuex'
import checkMeeting from '@/views/check-meeting/vuex'
import checkPrisoner from '@/views/check-prisoner/vuex'
import checkPrisonDataManagement from '@/views/check-prisoner-data/vuex'
import checkRegistration from '@/views/check-registration/vuex'
import infoPrisonAffairsPublic from '@/views/info-prison-affairs-public/vuex'
import noPage from './modules/no-page'
import login from '@/views/login/vuex'

import filter from './modules/filter'

import 'babel-polyfill'
Vue.use(Vuex)

let actions = {}, mutations = {}, getters = {}, state = {}, merge = (...args) => {
  args.map(arg => {
    Object.assign(actions, arg.actions)
    Object.assign(mutations, arg.mutations)
    Object.assign(getters, arg.getters)
    Object.assign(state, arg.state)
  })
}

// 将对应的actions,mutations,getters,state 添加到声明的对象中
merge(
  breadCrumb,
  jailsInformation,
  common,
  passwordModification,
  quillEditor,
  downloadFile,
  uploadFile,
  uploadImg,
  adminLog,
  breadCrumbs,
  adminFeedback,
  adminPrisonUser,
  infoPrisonAffairsPublic,
  filter,
  adminAdvertisement,
  adminPrison,
  adminPrisonArea,
  adminTerminal,
  adminVersion,
  adminWhitemember,
  checkFamily,
  checkMailbox,
  checkMeeting,
  checkPrisonDataManagement,
  checkPrisoner,
  checkRegistration,
  login,
  noPage
)
export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})
