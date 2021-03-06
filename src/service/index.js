import accounts from './modules/accounts'
import jailsInformation from './modules/jails-information'
import lawsInformation from './modules/laws-information'
import passwordModification from './modules/password-modification'
import downloadFile from './modules/download-file'
import uploadFile from './modules/upload-file'
import uploadImg from './modules/upload-img'

import admin from './modules/admin'
import check from './modules/check'
import information from './modules/information'
import common from './modules/common'
import noPage from './modules/no-page'

export default Object.assign(
  accounts,
  jailsInformation,
  lawsInformation,
  passwordModification,
  downloadFile,
  uploadFile,
  uploadImg,
  admin,
  common,
  check,
  information,
  noPage
)
