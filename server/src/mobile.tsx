import React from "react";
import { render } from "react-dom";
import { FactureComponent } from 'facture/src/main'

function App({}: {}) {
    const onChange = () => {}
    const facture = {
        id: null,
        numeroFacture: '',
        raisonSociale: '',
        lastName: '',
        firstName: '',
        street: '',
        complement: '',
        cp: '',
        country: '',
        city: '',
        dateCreation: null,
        dateEcheance: null,
        dateEcheanceOption: null,
        paymentOption: null,
        services: [],
        paiements: [],
        pieceJointes: [],
        isFinal: false,
        isPaye: false
    }
    const account = {
        city: '',
        complement: '',
        country: '',
        firstName: '',
        lastName: '',
        street: '',
        userId: '',
        zipCode: '',
        email: '',
        numTva: '',
        siret: '',
        phone: ''
    };
    return <FactureComponent account={account} value={facture} onChange={onChange} readonly={false} />
}

render(<App/>, document.getElementById("app"));


