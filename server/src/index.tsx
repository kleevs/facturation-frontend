import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { AppFactureComponent, AppFacturesComponent, AppSigninComponent } from 'webapp'

function App() {
    return <Router>
        <Route exact path="/" render={() => <AppFacturesComponent onClick={({ id }) => location.href = `/facture/${id}`} />} />
        <Route exact path="/facture" render={() => <AppFactureComponent id={0} onBackHome={() => location.href = `/`} />}/>
        <Route exact path="/facture/:id" render={(props) => <AppFactureComponent id={+props.match.params.id} onBackHome={() => location.href = `/`} />}/>
        <Route path="/signin" render={() => <AppSigninComponent />}/>
    </Router>
}

render(<App/>, document.getElementById("app"));
