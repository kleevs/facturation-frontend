import { post, notifySuccess as success, notifyError as error } from 'lib/src/main'
import signinServiceFactory from './service/signin'
import signinFactory from './action/signin'

const signinService = signinServiceFactory({ post })
export const signin = signinFactory({ signinService, success, error })