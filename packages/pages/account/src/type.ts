import { PageData } from 'common-page'

export interface Account {
    readonly city: string;
    readonly complement: string;
    readonly country: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly street: string;
    readonly userId: string;
    readonly zipCode: string;
    readonly email: string;
    readonly numTva: string;
    readonly siret: string;
    readonly phone: string;
}

type Traduction = {
    saveDone: string; // Sauvegarde effectué
}

type ApiUri = {
    saveAccount: string;
}

export type PageAccountData = PageData<{}, ApiUri, Traduction> & {
    account: Account;
}