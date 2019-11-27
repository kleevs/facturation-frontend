import { Detail as Facture } from './page/detail';
import { List as Factures} from './page/list';
import { Login as LoginApp} from './page/login';
import { ajax } from '../tool/ajax';
import { AuthenticationData } from './authenticationData';

export class Router {
    constructor() {
    }

    performRouting(pathname) : Promise<any> {
      if (pathname === '/login') {
          return Promise.resolve(new LoginApp());
      } else {
          return ajax<any>('/accounts', { method: 'GET' })
          .then(_ => new AuthenticationData(_.result))
          .then(authenticationData => {
              var matched;
              if (pathname === "/") {
                  return "";
              }
          
              if (pathname === "/facturations") {
                  return new Factures(authenticationData);
              }
          
              if (matched = (/\/facturations\/(\d+)/g).exec(pathname)) {
                  return new Facture(authenticationData, +matched[1]);
              }
          
              if (matched = (/\/facturations\/new/g).exec(pathname)) {
                  return new Facture(authenticationData, undefined);
              }
  
              return "";
          })
          .catch(_ => {
              location.href = '/login';
          });
      }
    }
  }