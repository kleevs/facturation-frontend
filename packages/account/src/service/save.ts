import type { App } from 'interface/src/facture'
import type { put } from 'lib'

type Deps = {
  put: typeof put;
}

export default ({put}: Deps) => 
function save(account: App.Account): Promise<void> {
  return put(`/api/accounts/${account.userId}`, account);
}