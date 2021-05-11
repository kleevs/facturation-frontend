import type { put } from 'lib/src/main'

type Deps = {
  put: typeof put;
}

export default ({put}: Deps) => 
function save(account: App.Account): Promise<void> {
  return put(`/api/accounts/${account.userId}`, account);
}