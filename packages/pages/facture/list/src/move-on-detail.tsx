import { PageFactureListData } from './type'
import { Store } from 'lib'

export async function moveOnDetail(store: Store<PageFactureListData>, id: number) { 
    const { meta: { uri } } = store.getValue();
    store.update(current => ({...current, href: uri.domain.factureDetail(id) }));
}