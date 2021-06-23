import { App } from 'interface'
import { notifyError, notifySuccess, put } from 'lib'

export default async function save(account: App.Account): Promise<void> {
    try {
        await put(`/api/accounts/${account.userId}`, account);
        notifySuccess("Success", "Sauvegarde effectué");
    } catch (e) {
        notifyError("Erreur", e?.message);
        throw e;
    }
}