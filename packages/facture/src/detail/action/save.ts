import type { App } from 'interface'
import { notifyError, notifySuccess, put, post } from 'lib'
import loadService from './load-facture'

export default 
async function save(facture: App.Facture): Promise<App.Facture> {
    try {
        await !!facture.id ? 
            put(`/api/facturation/${facture.id || ''}`, facture) : 
            post(`/api/facturation`, facture);
            notifySuccess("Success", "Sauvegarde effectué");
        let reloaded = await loadService(facture.id);
        return reloaded;
    } catch (e) {
        console.log(e);
        notifyError("Erreur", e.message);
        throw e;
    }
}