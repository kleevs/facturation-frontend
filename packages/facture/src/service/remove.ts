import type { remove } from 'lib'

type Deps = {
  removeAjax: typeof remove;
}

export default ({removeAjax}: Deps) => 
function remove(factureId: number): Promise<number> {
  return removeAjax(`/api/facturation/${factureId}`)
}