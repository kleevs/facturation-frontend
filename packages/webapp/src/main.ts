import AppFactureComponentFactory from './component/facture'
import AppFacturesComponentFactory from './component/factures'
import { FactureComponent, FacturesComponent } from 'facture'

export const AppFactureComponent = AppFactureComponentFactory({ FactureComponent })
export const AppFacturesComponent = AppFacturesComponentFactory({ FacturesComponent })