export class AccountAction {
    constructor(
        private readonly _accountService: Service.AccountService,
        private readonly _notifier: Tools.Notifier
    ) {}

    async save(account: App.Account): Promise<void> {
        try {
            await this._accountService.save(account);
            this._notifier.success("Success", "Sauvegarde effectué");
        } catch (e) {
            this._notifier.error("Erreur", e?.message);
            throw e;
        }
    }
}