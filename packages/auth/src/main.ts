import { post, notifySuccess as success, notifyError as error, preventDefault } from 'lib'
import { SigninTextfield } from './ui'
import signinServiceFactory from './service/signin'
import loadAccountFactory from './service/load-account'
import signinFactory from './action/signin'
import signinComponentFactory from './component/signin'

const signinService = signinServiceFactory({ post })
const signin = signinFactory({ signinService, success, error })
export const SigninComponent = signinComponentFactory({ preventDefault, signin, SigninTextfield })
export const loadAccount = loadAccountFactory()