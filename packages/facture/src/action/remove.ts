import type { notifyError, notifySuccess } from 'lib/src/main'
import type removeServiceFactory from '../service/remove'

type Deps = {
    removeService: (typeof removeServiceFactory) extends (...args) => infer T ? T : typeof removeServiceFactory;
    success: typeof notifySuccess;
    error: typeof notifyError;
}

export default ({removeService, success, error}: Deps) =>
async function remove(facture: App.Facture): Promise<void> {
    try {
        await removeService(facture.id);
        success("Success", "Suppression effectué");
    } catch (e) {
        error("Erreur", e.message);
    }
}