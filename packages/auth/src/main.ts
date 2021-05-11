import { post, notifySuccess as success, notifyError as error, preventDefault } from 'lib/src/main'
import signinServiceFactory from './service/signin'
import signinFactory from './action/signin'
import signinComponentFactory from './component/signin'

const signinService = signinServiceFactory({ post })
const signin = signinFactory({ signinService, success, error })
export const signinComponent = signinComponentFactory({ preventDefault, signin })