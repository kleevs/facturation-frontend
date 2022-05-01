import { put } from 'lib'
import { Store } from 'lib'
import { PageAccountData } from './type'
import { notifyError, notifySuccess } from 'common-page'

export async function saveAccount(store: Store<PageAccountData>) {
    try {
        const { account, meta: { uri, traduction } } = store.getValue();
        await put(uri.api.saveAccount, account);
        notifySuccess(store, traduction.saveDone);
    } catch (e) {
        notifyError(store, e?.message);
        throw e;
    }
}