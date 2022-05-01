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

export interface Facture {
    readonly id: number;
    readonly numeroFacture: string;
    readonly raisonSociale: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly street: string;
    readonly complement: string;
    readonly cp: string;
    readonly country: string;
    readonly city: string;
    readonly dateCreation: Date;
    readonly dateEcheance: Date;
    readonly dateEcheanceOption: number;
    readonly paymentOption: number;
    readonly services: IService[];
    readonly paiements: IPaiement[];
    readonly pieceJointes: PJ[];
    readonly isFinal: boolean;
    readonly isPaye: boolean;
}

export interface PJ {
    readonly file: File;
    readonly uri: string;
}

type Traduction = {
    saveDone: string; // "Sauvegarde effectué"
}

type ApiUri = {
    paiement: string; // /api/paiement
    piecejointe: string; // /api/piecejointe
    facture: (id: number) => string; // /api/facturation/${factureId}
    paiementId: (id: number) => string; // /api/paiement/${paiement.id}
    piecejointeId: (factureId: number, filename: string) => string; // /api/facturation/${facture.id}/piecejointe/${filename}
}

export type PageFactureDetailData = PageData<null, ApiUri, Traduction> & {
    facture: Facture;
}