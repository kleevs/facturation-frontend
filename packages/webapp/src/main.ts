import AppFactureComponentFactory from './component/facture'
import AppFacturesComponentFactory from './component/factures'
import AppSigninComponentFactory from './component/signin'
import { FactureComponent, FacturesComponent, loadFacture, loadFactures } from 'facture'
import { SigninComponent } from 'auth'
import { loadAccount } from 'account'

export const AppFactureComponent = AppFactureComponentFactory({ FactureComponent, loadFacture, loadAccount })
export const AppFacturesComponent = AppFacturesComponentFactory({ FacturesComponent, loadFactures })
export const AppSigninComponent = AppSigninComponentFactory({ SigninComponent })