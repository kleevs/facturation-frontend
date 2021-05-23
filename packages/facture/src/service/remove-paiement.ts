import type { remove } from 'lib'

type Deps = {
  remove: typeof remove;
}

export default ({remove}: Deps) => 
function save(paiementId: number): Promise<void> {
  return remove(`/api/paiement/${paiementId}`);
}