import type { App } from 'interface'
import { notifyError, notifySuccess, remove } from 'lib'
import loadService from './load-facture'

export default 
async function removePaiement(factureId: number, paiement: App.IPaiement): Promise<App.Facture> {
    try {
        await remove(`/api/paiement/${paiement.id}`);
        notifySuccess("Success", "Sauvegarde effectué");
        let reloaded = await loadService(factureId);
        return reloaded;
    } catch (e) {
        notifyError("Erreur", e.message);
        throw e;
    }
}