import React, { Context } from 'react';

export type Collection = { 
    add: <T>(context: Context<T>) => {
        value: (value: T) => void;
    }
}

type Config = { (collection: Collection): void };

export default function IoC({config, children}: {config: Config, children: any}) {
    const collections: { context: Context<any>, value: any }[] = [];
    config({
        add: (context) => ({
            value: (value) => collections.push({ context, value })
        })
    });

    let root = <>{children || ''}</>;
    collections.forEach(({ context: { Provider }, value }) => root = <Provider value={value}>{root}</Provider>);
    return root;
}