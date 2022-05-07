import { Store, get } from "lib";
import { Account, SessionPage } from "./type";

export async function getUserSession(store: Store<SessionPage>, withRedirect: boolean) {
    const { href, meta: { uri } } = store.getValue();

    try { 
        const account = await get<Account>(uri.api.signin);
        store.update(current => ({...current, userSession: { account, isConnected: true }}))
    } catch (e) {
        if (withRedirect) {
            store.update(current => ({...current, userSession: {...current.userSession, isConnected: false}, href: uri.domain.signin(href)}));
        }
    }
}