import type { App } from 'interface'
import { get } from 'lib'

export default 
function loadFactures(): Promise<App.Facture[]> { 
    return get(`/api/facturation`)
}