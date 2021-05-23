import AppFactureComponentFactory from './component/facture'
import AppLayoutComponentFactory from './component/layout'
import { FactureComponent } from 'facture'

const Layout = AppLayoutComponentFactory()
export const AppFactureComponent = AppFactureComponentFactory({ Layout, FactureComponent })