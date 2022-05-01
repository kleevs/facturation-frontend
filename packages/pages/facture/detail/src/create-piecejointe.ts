import { post } from 'lib'
import { loadFacture } from './load-facture'
import { PageFactureDetailData, PJ } from './type'
import { Store } from 'lib'
import { notifyError, notifySuccess } from 'common-page';

export async function createPieceJointe(store: Store<PageFactureDetailData>, pieceJointe: PJ[]) {
    try {
        const { facture, meta: { traduction, uri } } = store.getValue();
        await post(uri.api.piecejointe, { id: facture.id, documents: pieceJointe.map(_ => _.file) });
        notifySuccess(store, traduction.saveDone);
        await loadFacture(store, facture.id);
    } catch (e) {
        notifyError(store, e.message);
        throw e;
    }
}