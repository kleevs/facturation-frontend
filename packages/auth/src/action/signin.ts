import type { notifyError, notifySuccess } from 'lib'
import type signinServiceFactory from '../service/signin'

type Deps = {
    signinService: (typeof signinServiceFactory) extends (...args) => infer T ? T : typeof signinServiceFactory;
    success: typeof notifySuccess;
    error: typeof notifyError;
}

export default ({signinService, success, error}: Deps) =>
async function signin(login: string, password: string): Promise<void> {
    try {
        await signinService(login, password);
        success("Success", "Connexion réussi");
    } catch (e) {
        error("Erreur", e?.message);
        throw e;
    }
}