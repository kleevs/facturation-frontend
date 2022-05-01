import { Store, get } from "lib";
import { SessionPage } from "./type";

export async function getUserSession(store: Store<SessionPage>, withRedirect: boolean) {
    const { href, meta: { uri } } = store.getValue();

    try { 
        await get(uri.api.signin);
        store.update(current => ({...current, userSession: { isConnected: true }}))
    } catch (e) {
        if (withRedirect) {
            store.update(current => ({...current, userSession: {...current.userSession, isConnected: false}, href: uri.domain.signin(href)}));
        }
    }
}