import { ajax } from '../../tool/ajax';
import { IFacture } from '../../model/facture';
import { AuthenticationData } from '../authenticationData';

export class List {

  factures: IFacture[] = [];

  constructor(auth: AuthenticationData) {
    ajax<IFacture[]>(`/facturation`, { method: 'GET' }).then((response) => {
      this.factures = response.result;
    });
  }
}