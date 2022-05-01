export type Notification = {
    type: 'error' | 'succcess';
    message: string;
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

export type PageData<TUri, TApiUri, TTraduction> = NotifiablePageData & MetaPageData<TUri, TApiUri, TTraduction> & {
    href: string;
}