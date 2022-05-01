import { get } from 'lib'
import { PageFactureDetailData, Facture } from './type'
import { Store } from 'lib'

export async function loadFacture(store: Store<PageFactureDetailData>, factureId: number) {
  const { meta: { uri } } = store.getValue();
  
  const facture = !!factureId && await get<Facture>(uri.api.facture(factureId)) || {
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
  } as Facture;

  store.update({...store.getValue(), facture })
}