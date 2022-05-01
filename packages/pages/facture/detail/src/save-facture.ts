import { post, put } from 'lib'
import { loadFacture } from './load-facture'
import { PageFactureDetailData } from './type'
import { Store } from 'lib'
import { notifyError, notifySuccess } from 'common-page';

export async function saveFacture(store: Store<PageFactureDetailData>) {
    try {
        const { facture, meta: { traduction, uri } } = store.getValue();
        await !!facture.id ? 
            put(uri.api.facture(facture.id), facture) : 
            post(uri.api.facture(null), facture);
            notifySuccess(store, traduction.saveDone);
            await loadFacture(store, facture.id);
    } catch (e) {
        console.log(e);
        notifyError(store, e?.message);
        throw e;
    }
}