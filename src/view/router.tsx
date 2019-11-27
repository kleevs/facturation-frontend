import * as React from 'react';
import Menu from './menu';
import Detail from './detail/index';
import List from './list';
import Login from './login';
import { Detail as Facture } from '../app/page/detail';
import { List as Factures} from '../app/page/list';
import { Login as LoginApp} from '../app/page/login';
import { useObserver } from '../tool/react.extend';
import { Router } from '../app/router';

var router = new Router();
const CALCULATED_ROUTE = {
    component: undefined
};

var performRouting = (pathname) => {
    router.performRouting(pathname).then(app => {
        return app instanceof LoginApp && <Login app={app} /> ||
        app instanceof Factures && <List app={app} /> ||
        app instanceof Facture && <Detail app={app} /> ||
        <Menu />
    })
    .then(_ => CALCULATED_ROUTE.component = _);
}

export default function () { 
    var route = useObserver(CALCULATED_ROUTE);

    return <div className="container">
        {route.component || ''}
    </div>
}

(() => {
    var pathname = location.pathname;
    performRouting(pathname);
})();

