export class SigninService implements Service.SigninService {
    constructor(
        private readonly _ajax: Tools.Ajax
    ) {}

    signin(login: string, password: string): Promise<void> {
        return this._ajax.post('/api/accounts/login', { login, password });
    }
}