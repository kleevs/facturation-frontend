import AppFactureComponentFactory from './component/facture'
import AppFacturesComponentFactory from './component/factures'
import AppSigninComponentFactory from './component/signin'
import loadFacturesFactory from './service/load-factures'
import loadFactureFactory from './service/load-facture'
import { FactureComponent, FacturesComponent } from 'facture'
import { SigninComponent, loadAccount } from 'auth'

const loadFactures = loadFacturesFactory();
const loadFacture = loadFactureFactory();
export const AppFactureComponent = AppFactureComponentFactory({ FactureComponent, loadFacture, loadAccount })
export const AppFacturesComponent = AppFacturesComponentFactory({ FacturesComponent, loadFactures })
export const AppSigninComponent = AppSigninComponentFactory({ SigninComponent })