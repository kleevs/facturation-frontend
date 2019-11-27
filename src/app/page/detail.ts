import { ajax, ajaxFormData } from '../../tool/ajax';
import { IFacture } from '../../model/facture';
import { AuthenticationData } from '../authenticationData';
import { IService } from '../../model/service';
import { IPaiement } from '../../model/paiement';
import { parseDate } from '../../tool/date';

export class Detail {
  id: number = undefined;
  userDataId: number = 0;
  currentUserDataId: number = 0;
  raisonSociale = '';
  lastName = '';
  firstName = '';
  street = '';
  complement = '';
  cp = '';
  city = '';
  country = '';
  isReadOnly = false;
  services: IService[] = [];
  dateCreation = new Date();
  dateEcheanceOption = 1;
  paymentOption = 1;
  dateEcheances = [{ id: 1, label: '45 jours + fin du mois' }];
  unites = [{ id: 1, label: 'jour' }];
  payments = [{ id: 1, label: 'Virement' }];

  // Paiement onglet
  paiements: IPaiement[] = [];
  nouveauMontant: number = 0;
  isPaye: boolean = false; 
  private _nouveauDateCreation: Date = undefined;

  // Piece jointe
  files: any[] = [];
  uploadedFile: string[] = [];

  get nouveauDateCreation() { return this._nouveauDateCreation && this._nouveauDateCreation.toString(); }
  set nouveauDateCreation(v: string) { this._nouveauDateCreation = parseDate(v); }

  constructor(public auth: AuthenticationData, id: number) {
    this.id = id;
    var auth = this.auth;
    this.currentUserDataId = auth && auth.current && auth.current.data[0] && auth.current.data[0].id;
    this.load();
  }

  save() {
    var facture = {
      id: this.id,
      userDataId: this.userDataId, 
      contact: {
        raisonSociale: this.raisonSociale,
        lastName: this.lastName,
        firstName: this.firstName,
        address: {
          street: this.street,
          complement: this.complement,
          cp: this.cp,
          city: this.city,
          country: this.country
        }
      },
      services: this.services.map(_ => ({
        id: _.id,
        description: _.description,
        price: _.price,
        unite: _.unite || 1,
        quantity: _.quantity,
        tva: _.tva
      })),
      dateEcheanceOption: this.dateEcheanceOption,
      dateCreation: this.dateCreation,
      paymentOption: this.paymentOption
    };

    ajax(`/facturation/${facture.id || ''}`, { method : facture.id && 'POST' || 'PUT', data: facture})
      .then(_ => this.load());
    return false;
  }

  addService() {
    this.services = this.services.concat([{
      id: 0,
      description: '',
      price: 0,
      unite: '',
      quantity: 0,
      tva: 0
    }]);
  }

  removeService(service) {
    this.services = this.services.filter(_ => _ !== service);
  }

  addPaiement() {
    ajax(`/paiement`, { method : 'PUT', data: {
        dateCreation: this._nouveauDateCreation, 
        montant: this.nouveauMontant,
        factureId: this.id
    }}).then(() => {
        this.load();
    });
  }

  removePaiement(paiement: IPaiement) {
      ajax(`/paiement/${paiement.id}`, { method : 'DELETE' }).then(() => {
          this.load();
      });
  }

  load() {
    if (this.id) { 
        ajax<IFacture>(`/facturation/${this.id}`, { method: 'GET' }).then((response) => {
          var facture = response.result;
          
          if (facture) {
            this.id = facture.id;
            this.userDataId = facture.userDataId;
            this.raisonSociale = facture.raisonSociale;
            this.lastName = facture.lastName;
            this.firstName = facture.firstName;
            this.street = facture.street;
            this.complement = facture.complement;
            this.cp = facture.cp;
            this.city = facture.city;
            this.country = facture.country;
            this.services = facture.services.map(_ => ({
              id: _.id,
              description: _.description,
              price: _.price,
              unite: _.unite,
              quantity: _.quantity,
              tva: _.tva
            })) || [],
            this.dateEcheanceOption = facture.dateEcheanceOption;
            this.dateCreation = facture.dateCreation;
            this.paymentOption = facture.paymentOption;
            this.isReadOnly = facture.isFinal;
            this.paiements = facture.paiements;
            this.isPaye = facture.isPaye;
            this.uploadedFile = facture.pieceJointes;
          }
        });
    } else {
      this.userDataId = this.currentUserDataId;
    }
  }

  addPieceJointe() {
    var data: any = { 
        id: this.id,
        documents: this.files
     };

    ajaxFormData(`/piecejointe`, { method : 'PUT', data: data}).then(() => {
      this.clear();
      this.load();
    });
  }

  clear() {
    this.files = [];
  }
}