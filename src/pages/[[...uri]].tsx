import React, { useCallback } from 'react';
import {useHistory} from 'react-router-dom';
import dynamic from 'next/dynamic';
import { Route } from "react-router-dom";
import RouterFactory, { RouteAsync } from 'src/tools/router';
import { AccountService } from 'src/app/service/account-service';
import { Ajax } from 'src/tools/ajax';
import { FactureService } from 'src/app/service/facture-service';
const Router = RouterFactory();
const SigninModule = dynamic(() => import('src/modules/signin'));
const ListingModule = dynamic(() => import('src/modules/list'));
const DetailModule = dynamic(() => import('src/modules/detail'));
const AccountModule = dynamic(() => import('src/modules/account'));
const ajax = new Ajax();

function CustomRouter() {
  const history = useHistory();
  const changeLocation = useCallback((href) => history.push(href), [history]);
  const signinIsRequired = useCallback(() => { changeLocation('/signin'); return <></> }, [changeLocation]);
  const goHome = useCallback(() => { changeLocation('/'); }, [changeLocation]);
  return <>
    <Route exact path='/signin' render={() => <SigninModule isConnected={() => goHome()} />} />
    <RouteAsync exact path='/accounts' render={() => new AccountService(ajax).isConnected().then(data => <AccountModule initialValue={data} />).catch(signinIsRequired)}/>
    <RouteAsync exact path={['/', '/facturation']} render={() => new FactureService(ajax).loadFactures().then(data => <ListingModule initialValue={data} />).catch(signinIsRequired)} />
    <RouteAsync exact path='/facturation/:id' render={({match: {params: {id}}}) => new FactureService(ajax).load(id).then(data => <DetailModule initialValue={data} removeDone={goHome} />).catch(signinIsRequired)} />
  </>
}

export default function Page() {
  return <Router><CustomRouter /></Router>
}