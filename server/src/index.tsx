import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { AppFactureComponent, AppFacturesComponent, AppSigninComponent } from 'webapp'

function App() {
    return <Router>
        <Route exact path="/" render={() => <AppFacturesComponent />} />
        <Route exact path="/facture" render={() => <AppFactureComponent />}/>
        <Route path="/signin" render={() => <AppSigninComponent />}/>
    </Router>
}

render(<App/>, document.getElementById("app"));
