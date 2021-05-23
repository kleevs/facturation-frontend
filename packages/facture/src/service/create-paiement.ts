import type { post } from 'lib'

type Deps = {
  post: typeof post;
}

export default ({post}: Deps) => 
function createPaiement(factureId: number, montant: number, dateCreation: Date): Promise<void> {
  return post(`/api/paiement`, { dateCreation, montant, factureId });
}