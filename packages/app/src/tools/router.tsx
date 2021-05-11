import React, { Suspense, lazy, ReactElement } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
export default function RouterFactory () { 
    return function Router({children}: { children}) {
        if (typeof window !== 'undefined') {
            return <BrowserRouter>{children}</BrowserRouter>
        } else {
            return <>loading...</>
        }
    }
}

export function RouteAsync({render, exact, path}: {
    render: (routeProps: any) => Promise<ReactElement<any, any>>;
    exact: boolean;
    path: string | string[]
}) {
    if (typeof window !== 'undefined') {
        return <Route exact={exact} path={path} render={(routeProps) => { 
            const Component = lazy(() => render(routeProps).then(_ => ({ default: () => _ })));
            return <Suspense fallback='loading...'>
                <Component />
            </Suspense>
        }} />
    } else {
        return <Route exact={exact} path={path}>
            loading...
        </Route>
    }
}

// const ajax = new Ajax();

// export function RouteAsync<T>({component: Component, exact, path}: {
//     component: ComponentType<{data: T}>;
//     exact: boolean;
//     path: string | string[]
// }) {
//     if (typeof window !== 'undefined') {
//         return <Route exact={exact} path={path} render={({location}) => {
//             const ComponentLazy = lazy(() => ajax.get<T>(`/api${location.pathname || ''}`).then(_ => ({ default: ()=> <Component data={_} /> })));

//             return <Suspense fallback='loading...'>
//                 <ComponentLazy />
//             </Suspense>
//             } 
//         }/>
//     } else {
//         return <Route exact={exact} path={path}>
//             loading...
//         </Route>
//     }
// }