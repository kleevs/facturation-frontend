import type { App } from 'interface'
import type { post, put } from 'lib'

type Deps = {
  post: typeof post;
  put: typeof put;
}

export default ({put, post}: Deps) => 
function save(facture: App.Facture): Promise<number> {
  return !!facture.id ? 
    put(`/api/facturation/${facture.id || ''}`, facture) : 
    post(`/api/facturation`, facture);
}