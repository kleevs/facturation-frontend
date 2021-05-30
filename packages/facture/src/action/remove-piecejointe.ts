import type { App } from 'interface'
import type { notifyError, notifySuccess } from 'lib'
import type removePieceJointeServiceFactory from '../service/remove-piecejointe'
import type loadServiceFactory from '../service/load-facture'

type Deps = {
    removePieceJointeService: ReturnType<typeof removePieceJointeServiceFactory>;
    loadService: ReturnType<typeof loadServiceFactory>;
    success: typeof notifySuccess;
    error: typeof notifyError;
}

export default ({removePieceJointeService, loadService, success, error}: Deps) =>
async function removePieceJointe(factureId: number, filename: string): Promise<App.Facture> {
    try {
        await removePieceJointeService(factureId, filename);
        success("Success", "Sauvegarde effectué");
        let reloaded = await loadService(factureId);
        return reloaded;
    } catch (e) {
        error("Erreur", e.message);
        throw e;
    }
}