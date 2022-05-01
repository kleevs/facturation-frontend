import { remove } from 'lib'
import { loadFacture } from './load-facture'
import { PageFactureDetailData } from './type'
import { Store } from 'lib'
import { notifyError, notifySuccess } from 'common-page';

export async function removePieceJointe(store: Store<PageFactureDetailData>, filename: string) {
    try {
        const { facture, meta: { traduction, uri } } = store.getValue();
        await remove(uri.api.piecejointeId(facture.id, filename));
        notifySuccess(store, traduction.saveDone);
        await loadFacture(store, facture.id);
    } catch (e) {
        notifyError(store, e.message);
        throw e;
    }
}