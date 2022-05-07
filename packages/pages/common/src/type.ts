export interface Account {
    readonly city: string;
    readonly complement: string;
    readonly country: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly street: string;
    readonly userId: string;
    readonly zipCode: string;
    readonly email: string;
    readonly numTva: string;
    readonly siret: string;
    readonly phone: string;
}

export type Notification = {
    type: 'error' | 'succcess';
    message: string;
}

type ApiUri = {
    signin: string;
}

type Uri = {
    signin: (redirect: string) => string;
}

type MetaPageData<TUri, TApiUri, TTraduction> = {
    meta: {
        uri: { 
            domain: NonNullable<TUri>;
            api: NonNullable<TApiUri>;
        };
        traduction: NonNullable<TTraduction>; 
    }
}

export type NotifiablePageData = {
    notifications: Notification[];
}

export type SessionPage = HrefPage & MetaPageData<Uri, ApiUri, {}> & {
    userSession: {
        isConnected: boolean;
        account: Account;
    }
}

export type HrefPage = {
    href: string;
}

export type PageData<TUri, TApiUri, TTraduction> = HrefPage & SessionPage & NotifiablePageData & MetaPageData<TUri, TApiUri, TTraduction> & {
}