import { Store } from 'lib'
import { SessionPage, getUserSession } from 'common-page'
import { useSelector } from './use-selector'
import { useEffect } from 'react';

export function useUserSession(store: Store<SessionPage>);
export function useUserSession(store: Store<SessionPage>, withRedirect: boolean);
export function useUserSession(store: Store<SessionPage>, withRedirect?: boolean) {
    const userSession = useSelector(store, ({ userSession }) => userSession);
    useEffect(() => {
        getUserSession(store, withRedirect);
    }, [store]);

    return userSession;
}