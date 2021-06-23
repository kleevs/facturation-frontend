import type { App } from 'interface'
import { get } from 'lib'

export default 
function load(factureId: number): Promise<App.Facture> {
  return factureId && get(`/api/facturation/${factureId}`) || Promise.resolve({
    id: 0,
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