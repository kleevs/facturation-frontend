import { post } from 'lib'
import { loadFacture } from './load-facture'
import { PageFactureDetailData, IPaiement } from './type'
import { Store } from 'lib'
import { notifyError, notifySuccess } from 'common-page';

export async function createPaiement(store: Store<PageFactureDetailData>, paiement: IPaiement) {
    try {
        const { facture, meta: { traduction, uri } } = store.getValue();
        const { dateCreation, value: montant } = paiement; 

        await post(uri.api.paiement, { dateCreation, montant, factureId: facture.id });
        notifySuccess(store, traduction.saveDone);
        await loadFacture(store, facture.id);
    } catch (e) {
        notifyError(store, e.message);
        throw e;
    }
}