import type { App } from 'interface'
import type { get } from 'lib'

type Deps = {
  get: typeof get;
}

export default ({get}: Deps) => 
function load(factureId: number): Promise<App.Facture> {
  return get(`/api/facturation/${factureId}`)
}