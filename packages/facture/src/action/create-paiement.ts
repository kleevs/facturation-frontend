import type { App } from 'interface/src/facture'
import type { notifyError, notifySuccess } from 'lib/src/main'
import type createPaiementServiceFactory from '../service/create-paiement'
import type loadServiceFactory from '../service/load'

type Deps = {
    createPaiementService: (typeof createPaiementServiceFactory) extends (...args) => infer T ? T : typeof createPaiementServiceFactory;
    loadService: (typeof loadServiceFactory) extends (...args) => infer T ? T : typeof loadServiceFactory;
    success: typeof notifySuccess;
    error: typeof notifyError;
}

export default ({createPaiementService, loadService, success, error}: Deps) =>
async function createPaiement(factureId: number, paiement: App.IPaiement): Promise<App.Facture> {
    try {
        await createPaiementService(factureId, paiement.value, paiement.dateCreation);
        success("Success", "Sauvegarde effectué");
        let reloaded = await loadService(factureId);
        return reloaded;
    } catch (e) {
        error("Erreur", e.message);
        throw e;
    }
}