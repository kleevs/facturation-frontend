import type { App } from 'interface'
import type { get } from 'lib'

type Deps = {
  get: typeof get;
}

// export default ({get}: Deps) => 
// function load(factureId: number): Promise<App.Facture> {
//   return get(`/api/facturation/${factureId}`)
// }

export default ({get}: Deps) => 
function load(factureId: number): Promise<App.Facture> {
  return Promise.resolve({
    id: 1,
    numeroFacture: '',
    raisonSociale: 'La société de test',
    lastName: 'Boss',
    firstName: 'Baby',
    street: '',
    complement: '',
    cp: '',
    country: '',
    city: '',
    dateCreation: new Date(),
    dateEcheance: null,
    dateEcheanceOption: null,
    paymentOption: null,
    services: [{
        id: 0,
        description: 'test service',
        price: 500,
        quantity: 22,
        tva: 20,
        unite: ''
    }],
    paiements: [],
    pieceJointes: [],
    isFinal: false,
    isPaye: false
  })
}