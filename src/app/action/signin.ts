export class SigninAction {
    constructor(
        private readonly _signinEngine: Service.SigninService,
        private readonly _notifier: Tools.Notifier
    ) {}

    async signin(login: string, password: string): Promise<void> {
        try {
            await this._signinEngine.signin(login, password);
            this._notifier.success("Success", "Connexion réussi");
        } catch (e) {
            this._notifier.error("Erreur", e.result?.message);
            throw e;
        }
    }
}