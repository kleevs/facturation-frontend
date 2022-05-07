import React, { useCallback, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Factures } from './pages/factures'
import { Facture } from './pages/facture'
import { Auth } from './pages/auth'
import { createStore } from "lib";
import { loadFactures } from "facture-list-page";
import { loadFacture } from "facture-detail-page";
import { createAppData } from "./data";

function AppContent() {
    const history = useHistory();
    const pageData = useMemo(() => createStore(createAppData()), []);
    const renderHome = useCallback(() => {
        loadFactures(pageData);
        return <Factures pageData={pageData} />
    }, [pageData]);
    const renderDetail = useCallback((id: number) => {
        loadFacture(pageData, id);
        return <Facture pageData={pageData} />
    }, [pageData]);

    useEffect(() => pageData.onUpdate(({href}) => [href], ({href}) => { 
        history.push(href); 
    }), [pageData])
    
    return <>
        <Route exact path="/" render={() => renderHome()} />
        <Route exact path="/facture" render={() => renderDetail(0)}/>
        <Route exact path="/facture/:id" render={(props) => renderDetail(+props.match.params.id)}/>
        <Route path="/signin" render={() => <Auth pageData={pageData} />}/>
    </>
}

export function App() {
    return <Router>
        <AppContent />
    </Router>
}

