import { post, Store } from 'lib'
import { PageAuthData } from './type';
import { notifyError, notifySuccess } from 'common-page'

export async function signin(store: Store<PageAuthData>) {
    try {
        const { login, password, meta: { traduction, uri }} = store.getValue();
        await post(uri.api.signin, { login, password });
        notifySuccess(store, traduction.signinSuccessfull);
    } catch (e) {
        notifyError(store, e?.message);
        throw e;
    }
}