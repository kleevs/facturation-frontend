declare namespace Service {
    export interface FactureService {
        save(facture: Model.IFacture): Promise<number>;
        delete(factureId: number): void;
        load(id: number): Promise<Model.IFacture>;
        addPaiement(factureId: number, montant: number, dateCreation: Date): Promise<unknown>;
        removePaiement(paiement: Model.IPaiement): Promise<unknown>;
        addPieceJointe(factureId: number, files: unknown[]): Promise<unknown>;
        removePieceJointe(factureId: number, filename: string): Promise<unknown>;
        loadFactures(): Promise<Model.IFacture[]>;
    }
}