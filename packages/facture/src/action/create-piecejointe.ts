import type { App } from 'interface'
import type { notifyError, notifySuccess } from 'lib'
import type createPieceJointeServiceFactory from '../service/create-piecejointe'
import type loadServiceFactory from '../service/load'

type Deps = {
    createPieceJointeService: ReturnType<typeof createPieceJointeServiceFactory>;
    loadService: ReturnType<typeof loadServiceFactory>;
    success: typeof notifySuccess;
    error: typeof notifyError;
}

export default ({createPieceJointeService, loadService, success, error}: Deps) =>
async function createPieceJointe(factureId: number, pieceJointe: App.PJ[]): Promise<App.Facture> {
    try {
        await createPieceJointeService(factureId, pieceJointe.map(_ => _.file));
        success("Success", "Sauvegarde effectué");
        let reloaded = await loadService(factureId);
        return reloaded;
    } catch (e) {
        error("Erreur", e.message);
        throw e;
    }
}