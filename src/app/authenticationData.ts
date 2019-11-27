import { AuthenticationModel } from '../model/authentication';

export class AuthenticationData {
    constructor(public current: { id: number; data: AuthenticationModel[] }) {
    }
  }