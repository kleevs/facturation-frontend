import type { App } from 'interface'
import { notifyError, notifySuccess, post } from 'lib'
import loadService from './load-facture'

export default  async function createPaiement(factureId: number, paiement: App.IPaiement): Promise<App.Facture> {
    try {
        const dateCreation = paiement.dateCreation, 
            montant = paiement.value;
        await post(`/api/paiement`, { dateCreation, montant, factureId });
        notifySuccess("Success", "Sauvegarde effectué");
        let reloaded = await loadService(factureId);
        return reloaded;
    } catch (e) {
        notifyError("Erreur", e.message);
        throw e;
    }
}