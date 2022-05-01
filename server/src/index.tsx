import React, { useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { render } from "react-dom";
import { Factures, Auth } from 'mobile-app'
import { createStore } from "lib";
import { PageFactureListData } from "facture-list-page";
import { Account as AccountType, PageAccountData } from "account-page";
import { PageAuthData } from "auth-page";

function createAppData(): PageFactureListData & PageAccountData & PageAuthData {
    return {
        meta: {
            uri: {
                domain: {
                    factureDetail: (id) => `/facture/${id}`
                },
                api: {
                    facturation: `/api/facturation`,
                    removeFacturation: (id: number) => `/api/facturation/${id}`,
                    saveAccount: "/api/accounts",
                    signin: "/api/signin"
                }
            },
            traduction: {
                removeDone: "Suppression effectué",
                saveDone: "Sauvegarde effectué",
                signinSuccessfull: "Connexion effectué"
            }
        },
        href: "",
        notifications: [],
        factures: [],
        account: {} as AccountType,
        login: '',
        password: ''
    }
}

function AppContent() {
    const history = useHistory();
    const pageData = useMemo(() => createStore(createAppData()), []);

    useEffect(() => pageData.onUpdate(({href}) => [href], ({href}) => history.push(href)), [pageData])
    
    return <>
        <Route exact path="/" render={() => <Factures pageData={pageData} />} />
        {/* <Route exact path="/facture" render={() => <AppFactureComponent id={0} onBackHome={() => location.href = `/`} />}/>
        <Route exact path="/facture/:id" render={(props) => <AppFactureComponent id={+props.match.params.id} onBackHome={() => location.href = `/`} />}/> */}
        <Route path="/signin" render={() => <Auth pageData={pageData} />}/>
    </>
}

function App() {
    return <Router>
        <AppContent />
    </Router>
}

render(<App/>, document.getElementById("app"));

