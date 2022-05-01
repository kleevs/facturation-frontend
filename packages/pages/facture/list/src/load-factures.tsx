import { PageFactureListData, FactureLight } from './type'
import { get, Store } from 'lib'

export async function loadFactures(store: Store<PageFactureListData>) { 
    const { meta: { uri } } = store.getValue();
    const factures = await get<FactureLight[]>(uri.api.facturation);
    store.update(current => ({...current, factures }));
}