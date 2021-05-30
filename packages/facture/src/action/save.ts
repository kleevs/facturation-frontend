import type { App } from 'interface'
import type { notifyError, notifySuccess } from 'lib'
import type saveServiceFactory from '../service/save'
import type loadServiceFactory from '../service/load-facture'

type Deps = {
    saveService: ReturnType<typeof saveServiceFactory>;
    loadService: ReturnType<typeof loadServiceFactory>;
    success: typeof notifySuccess;
    error: typeof notifyError;
}

export default ({saveService, loadService, success, error}: Deps) =>
async function save(facture: App.Facture): Promise<App.Facture> {
    try {
        await saveService(facture);
        success("Success", "Sauvegarde effectué");
        let reloaded = await loadService(facture.id);
        return reloaded;
    } catch (e) {
        console.log(e);
        error("Erreur", e.message);
        throw e;
    }
}