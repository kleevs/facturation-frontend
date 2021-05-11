import React from 'react';
import { Link } from "react-router-dom";
 
export default function Layout(options: { children }) {
    var app = { login: 'testeur', logout: () => {} };
    var children = options.children;
    var link = {
        home: '/',
        nouvelleFacture: '/facturation/new',
        factures: '/facturation',
        account: '/accounts'
    };
    return <div id="wrapper">

      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={link.home}>
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">MFacture</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <Link className="nav-link" to={link.nouvelleFacture} aria-expanded="true">
            <i className="fa fa-plus-circle"></i>
            <span>Nouvelle facture</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={link.factures} aria-expanded="true">
            <i className="fa fa-list-alt"></i>
            <span>Factures enregistrées</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
      </ul>

      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">

          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">
              <div className="topbar-divider d-none d-sm-block"></div>

              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="mr-2 d-none d-lg-inline text-primary small">{app && app.login || ''}</span>
                </a>
                
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <Link className="dropdown-item text-primary" to={link.account}>
                    <i className="fa fa-user"></i>&nbsp;
                    Mon compte
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item text-primary" to="/signin" >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Se déconnecter
                  </Link>
                </div>
              </li>
            </ul>
  
          </nav>

          {children}
        </div>

        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; mfacture.fr 2019</span>
            </div>
          </div>
        </footer>
      </div>
    </div>;
}