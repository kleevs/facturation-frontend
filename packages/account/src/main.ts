import { put, notifySuccess as success, notifyError as error, preventDefault } from 'lib'
import saveServiceFactory from './service/save'
import loadAccountFactory from './service/load-account'
import saveFactory from './action/save'
import settingComponentFactory from './component/setting'

const saveService = saveServiceFactory({ put })
const save = saveFactory({ saveService, success, error })
export const SettingComponent = settingComponentFactory({ preventDefault, save })
export const loadAccount = loadAccountFactory()