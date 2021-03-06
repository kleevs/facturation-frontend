export class FactureAction {
    constructor(
        private readonly _factureEngine: Service.FactureService,
        private readonly _notifier: Tools.Notifier
    ) {}

    async save(facture: App.Facture): Promise<App.Facture> {
        try {
            await this._factureEngine.save(facture);
            this._notifier.success("Success", "Sauvegarde effectué");
            let reloaded = await this._factureEngine.load(facture.id);
            return reloaded;
        } catch (e) {
            console.log(e);
            this._notifier.error("Erreur", e.message);
            throw e;
        }
    }

    async savePieceJointe(facture: App.Facture): Promise<App.Facture> {
        try {
            await this._factureEngine.save(facture);
            this._notifier.success("Success", "Sauvegarde effectué");
            let reloaded = await this._factureEngine.load(facture.id);
            return reloaded;
        } catch (e) {
            this._notifier.error("Erreur", e.message);
            throw e;
        }
    }

    async createPaiement(factureId: number, paiement: App.IPaiement): Promise<App.Facture> {
        try {
            await this._factureEngine.addPaiement(factureId, paiement.value, paiement.dateCreation);
            this._notifier.success("Success", "Sauvegarde effectué");
            let reloaded = await this._factureEngine.load(factureId);
            return reloaded;
        } catch (e) {
            this._notifier.error("Erreur", e.message);
            throw e;
        }
    }

    async removePaiement(factureId: number, paiement: App.IPaiement): Promise<App.Facture> {
        try {
            await this._factureEngine.removePaiement(paiement);
            this._notifier.success("Success", "Sauvegarde effectué");
            let reloaded = await this._factureEngine.load(factureId);
            return reloaded;
        } catch (e) {
            this._notifier.error("Erreur", e.message);
            throw e;
        }
    }

    async remove(facture: App.Facture): Promise<void> {
        try {
            await this._factureEngine.delete(facture.id);
            this._notifier.success("Success", "Suppression effectué");
        } catch (e) {
            this._notifier.error("Erreur", e.message);
        }
    }
}