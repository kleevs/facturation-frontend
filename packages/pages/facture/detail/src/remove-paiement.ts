import { remove } from 'lib'
import { loadFacture } from './load-facture'
import { PageFactureDetailData, IPaiement } from './type'
import { Store } from 'lib'
import { notifyError, notifySuccess } from 'common-page';

export async function removePaiement(store: Store<PageFactureDetailData>, paiement: IPaiement) {
    try {
        const { facture, meta: { traduction, uri } } = store.getValue();
        await remove(uri.api.paiementId(paiement.id));
        notifySuccess(store, traduction.saveDone);
        await loadFacture(store, facture.id);
    } catch (e) {
        notifyError(store, e?.message);
        throw e;
    }
}