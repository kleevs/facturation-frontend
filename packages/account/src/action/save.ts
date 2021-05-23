import type { App } from 'interface'
import type { notifyError, notifySuccess } from 'lib'
import type saveServiceFactory from '../service/save'

type Deps = {
    saveService: (typeof saveServiceFactory) extends (...args) => infer T ? T : typeof saveServiceFactory;
    success: typeof notifySuccess;
    error: typeof notifyError;
}

export default ({saveService, success, error}: Deps) =>
async function save(account: App.Account): Promise<void> {
    try {
        await saveService(account);
        success("Success", "Sauvegarde effectué");
    } catch (e) {
        error("Erreur", e?.message);
        throw e;
    }
}