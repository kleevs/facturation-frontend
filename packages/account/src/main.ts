import { put, notifySuccess as success, notifyError as error, preventDefault } from 'lib/src/main'
import saveServiceFactory from './service/save'
import saveFactory from './action/save'
import settingComponentFactory from './component/setting'

const saveService = saveServiceFactory({ put })
const save = saveFactory({ saveService, success, error })
export const settingComponent = settingComponentFactory({ preventDefault, save })