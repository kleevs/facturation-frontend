export namespace App {
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

    export interface IPaiement {
        readonly id: number;
        readonly dateCreation: Date;
        readonly value: number;
    }

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

    export interface IService {
        readonly id: number;
        readonly description: string;
        readonly price: number;
        readonly quantity: number;
        readonly tva: number;
        readonly unite: string;
    }
}