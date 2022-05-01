import { FactureLight, PageFactureListData } from './type'
import { Store, remove as removeAjax } from 'lib'
import { notifySuccess, notifyError } from 'common-page'

export async function remove(store: Store<PageFactureListData>, facture: FactureLight) {
    try {
        const { meta: { traduction, uri } } = store.getValue();
        await removeAjax(uri.api.removeFacturation(facture.id));
        notifySuccess(store, traduction.removeDone);
    } catch (e) {
        notifyError(store, e.message);
    }
}