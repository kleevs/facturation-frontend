import type { App } from 'interface'
import { notifyError, notifySuccess, post } from 'lib'
import loadService from './load-facture'

export default 
async function createPieceJointe(factureId: number, pieceJointe: App.PJ[]): Promise<App.Facture> {
    try {
        await post(`/api/piecejointe`, { id: factureId, documents: pieceJointe.map(_ => _.file) });
        notifySuccess("Success", "Sauvegarde effectué");
        let reloaded = await loadService(factureId);
        return reloaded;
    } catch (e) {
        notifyError("Erreur", e.message);
        throw e;
    }
}