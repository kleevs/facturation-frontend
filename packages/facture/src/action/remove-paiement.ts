import type { notifyError, notifySuccess } from 'lib/src/main'
import type removePaiementServiceFactory from '../service/remove-paiement'
import type loadServiceFactory from '../service/load'

type Deps = {
    removePaiementService: (typeof removePaiementServiceFactory) extends (...args) => infer T ? T : typeof removePaiementServiceFactory;
    loadService: (typeof loadServiceFactory) extends (...args) => infer T ? T : typeof loadServiceFactory;
    success: typeof notifySuccess;
    error: typeof notifyError;
}

export default ({removePaiementService, loadService, success, error}: Deps) =>
async function removePaiement(factureId: number, paiement: App.IPaiement): Promise<App.Facture> {
    try {
        await removePaiementService(paiement.id);
        success("Success", "Sauvegarde effectué");
        let reloaded = await loadService(factureId);
        return reloaded;
    } catch (e) {
        error("Erreur", e.message);
        throw e;
    }
}