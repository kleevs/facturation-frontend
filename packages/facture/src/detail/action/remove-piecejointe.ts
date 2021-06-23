import type { App } from 'interface'
import { notifyError, notifySuccess, remove } from 'lib'
import loadService from './load-facture'

export default
async function removePieceJointe(factureId: number, filename: string): Promise<App.Facture> {
    try {
        await remove(`/api/facturation/${factureId}/piecejointe/${filename}`);
        notifySuccess("Success", "Sauvegarde effectué");
        let reloaded = await loadService(factureId);
        return reloaded;
    } catch (e) {
        notifyError("Erreur", e.message);
        throw e;
    }
}