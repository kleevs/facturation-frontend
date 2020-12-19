declare namespace Service {
    export interface SigninService {
        signin(login: string, password: string): Promise<void>;
    }
}