import { put, notifySuccess as success, notifyError as error } from 'lib/src/main'
import saveServiceFactory from './service/save'
import saveFactory from './action/save'

const saveService = saveServiceFactory({ put })
export const save = saveFactory({ saveService, success, error })