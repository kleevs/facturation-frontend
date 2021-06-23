import type { App } from 'interface'
import { notifyError, notifySuccess } from 'lib'
import { remove as removeAjax } from 'lib'

export default 
async function remove(facture: App.Facture): Promise<void> {
    try {
        await removeAjax(`/api/facturation/${facture.id}`)
        notifySuccess("Success", "Suppression effectué");
    } catch (e) {
        notifyError("Erreur", e.message);
    }
}