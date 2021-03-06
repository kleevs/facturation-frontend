export class AccountService {
    constructor(
        private readonly _ajax: Tools.Ajax
    ) {}

    save(account: App.Account): Promise<void> {
        return this._ajax.put(`/api/accounts/${account.userId}`, account);
    }

    isConnected() : Promise<App.Account> {
        return this._ajax.ajax<any>('/api/accounts', { method: 'GET' }).then(_ => ({
            ..._?.data[0],
            userId: _?.id
        }));
    }
}