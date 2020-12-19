declare namespace Service {
    export interface AccountService {
        save(account: App.Account): Promise<void>;
        isConnected() : Promise<App.Account>;
    }
}