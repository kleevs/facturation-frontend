import { PageData } from 'common-page'

type Traduction = {
    signinSuccessfull: string;
}

type ApiUri = {
    signin: string; 
}

export type PageAuthData = PageData<{}, ApiUri, Traduction> & {
    login: string;
    password: string;
}