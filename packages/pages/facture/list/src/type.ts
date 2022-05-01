import { PageData } from 'common-page'

export interface IPaiement {
    readonly id: number;
    readonly dateCreation: Date;
    readonly value: number;
}

export interface IService {
    readonly id: number;
    readonly description: string;
    readonly price: number;
    readonly quantity: number;
    readonly tva: number;
    readonly unite: string;
}

export interface FactureLight {
    readonly id: number;
    readonly numeroFacture: string;
    readonly raisonSociale: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly dateCreation: Date;
    readonly dateEcheance: Date;
    readonly services: IService[];
    readonly paiements: IPaiement[];
}

type Traduction = {
    removeDone: string; // "Suppression effectué"
}

type ApiUri = {
    facturation: string; // `/api/facturation`
    removeFacturation: (id: number) => string; // `/api/facturation/${id}`}
}

type Uri = {
    factureDetail: (id: number) => string;
}

export type PageFactureListData = PageData<Uri, ApiUri, Traduction> & {
    factures: FactureLight[];
}