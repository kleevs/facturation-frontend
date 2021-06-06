import type { App } from 'interface'
import type { get } from 'lib'

type Deps = {
  get: typeof get;
}

export default ({get}: Deps) => 
function loadFactures(): Promise<App.Facture[]> { 
    return get(`/api/facturation`)
}