import React, { lazy, Suspense } from 'react';

export function useLazy(defaultValue?: (props: {}) => JSX.Element): [() => JSX.Element, (component: ()=>JSX.Element)=>void] {
    let resolve;
    const DefaultValue = defaultValue;
    const Component = lazy(() => new Promise<{ default: any }>(_ => {
        resolve = (value) => _({ default: value });
    }));

    return [
        () => <Suspense fallback={() => DefaultValue && <DefaultValue /> || ''}><Component /></Suspense>,
        (c) => resolve(c)
    ];
}