import { post, notifyError as error, notifySuccess as success } from 'lib'

export default async function signin(login: string, password: string): Promise<void> {
    try {
        await post('/api/accounts/login', { login, password });
        success("Success", "Connexion réussi");
    } catch (e) {
        error("Erreur", e?.message);
        throw e;
    }
}