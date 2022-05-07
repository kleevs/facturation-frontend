import { PageFactureDetailData } from './type'
import { Store } from 'lib'

export async function moveOnHome(store: Store<PageFactureDetailData>) { 
    const { meta: { uri } } = store.getValue();
    store.update(current => ({...current, href: uri.domain.home }));
}