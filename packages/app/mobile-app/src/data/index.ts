import { PageFactureListData } from "facture-list-page";
import { PageFactureDetailData } from "facture-detail-page";
import { PageAccountData } from "account-page";
import { PageAuthData } from "auth-page";

export function createAppData(): PageFactureListData & PageAccountData & PageAuthData & PageFactureDetailData {
    return {
        meta: {
            uri: {
                domain: {
                    home: `/`,
                    factureDetail: (id) => `/facture/${id}`,
                    signin: (redirect) => `/signin?redirect=${redirect}`
                },
                api: {
                    facturation: `/api/facturation`,
                    removeFacturation: (id: number) => `/api/facturation/${id}`,
                    saveAccount: "/api/accounts",
                    signin: "/api/signin",
                    paiement: "",
                    piecejointe: "",
                    facture: (id: number) => `/api/facturation/${id}`,
                    paiementId: (id: number) => `/api/paiement/${id}`,
                    piecejointeId: (factureId: number, filename: string) => `/api/facturation/${factureId}/piece-jointe/${filename}`
                }
            },
            traduction: {
                removeDone: "Suppression effectué",
                saveDone: "Sauvegarde effectué",
                signinSuccessfull: "Connexion effectué"
            }
        },
        userSession: {
            isConnected: false,
            account: null
        },
        href: location.pathname,
        notifications: [],
        factures: [],
        account: null,
        facture: null,
        login: '',
        password: ''
    }
}