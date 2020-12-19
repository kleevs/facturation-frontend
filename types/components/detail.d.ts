declare namespace Components {
    export namespace Detail {
        export interface Props {
            readonly value: App.Facture;
            readonly account: App.Account;
            readonly readonly: boolean;
            onChange(value: App.Facture): void;
        }

        export interface TabActionProps {
            readonly value: App.Facture;
            onChange(value: App.Facture): void;
        }

        export interface PieceJointeProps {
            readonly facture: App.Facture;
            readonly readonly: boolean;
            onChangeFacture(facture: App.Facture): void;
        }

        export interface PaiementProps {
            readonly facture: App.Facture;
            readonly readonly: boolean;
            onChangeFacture(facture: App.Facture): void;
        }

        export interface InformationVendeurProps {
            readonly value: App.Account;
        }

        export interface InformationClientProps {
            readonly readonly: boolean;
            readonly value: App.Facture;
            onChange(value: App.Facture): void;
        }

        export interface EcheanceProps {
            readonly readonly: boolean;
            readonly value: App.Facture;
            onChange(value: App.Facture): void;
        }

        export interface ServiceProps {
            readonly title: string;
            readonly readonly: boolean;
            readonly value: App.IService;
            onChange(value: App.IService): void;
            remove(value: App.IService): void;
        }
    }
}