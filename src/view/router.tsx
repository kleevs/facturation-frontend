import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import * as $ from 'jquery';
import { Router, Route, Link, useParams } from "react-router-dom";
import Menu from './menu';
import Detail from './detail/index';
import List from './list';
import Login from './login';
import Information from './information';
import { Detail as Facture } from '../app/page/detail';
import { List as Factures} from '../app/page/list';
import { Login as LoginApp} from '../app/page/login';
import { Information as InformationApp } from '../app/page/information';
import { UI } from '../app/service/ui';
import { AjaxService } from '../app/service/ajax';
import { AuthService } from '../app/service/auth.service';
import { AuthenticationData } from '../app/service/authenticationData';
// import { Router, Route, RouteAsync } from '../tool/react.extend';

var userData: AuthenticationData;
var $waitingScreen = $(`<div id='waiting-screen'></div>`);
var uiController = new UI({
    blockUI: () => { $("body").append($waitingScreen); },
    unblockUI: () => { $("<div>").append($waitingScreen); }
});
var ajaxService = new AjaxService(uiController);
var authService = new AuthService(ajaxService);

class History {
  private _listener;
  location = location;
  goTo(href: string, replace?: boolean) {
    if (!replace) { 
      history.pushState({}, '', href); 
    } else {
      history.replaceState({}, '', href);
    }
    if (this._listener) this._listener(location);
  }

  listen(callback) {
    this._listener = callback;
    return () => (callback === this._listener) && (this._listener = null);
  }
}

if (location.pathname !== "/login") {
  authService.isConnected().then(_ => userData = _).catch(_ => {
    location.href = "/login"; 
  });
}

export default function App() {
  var router = new History();

  return (userData || location.pathname === "/login") && <Router history={router}>
    <Route exact path="/login" render={() => <Login app={new LoginApp(ajaxService, router)} />} />
    <Route exact path="/facturations" render={() => <List app={new Factures(ajaxService, userData, router)} />} />
    <Route exact path="/facturations/new" render={(props) => <Detail app={new Facture(ajaxService, router, userData, +props.match.params.id)} />}/>
    <Route path="/facturations/:id" render={(props) => <Detail app={new Facture(ajaxService, router, userData, +props.match.params.id)} />}/>
    <Route path="/account" render={() => <Information app={new InformationApp(ajaxService, userData)} />}/>
  </Router> || '';
}

