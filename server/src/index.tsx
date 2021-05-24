import React, { useState } from "react";
import { render } from "react-dom";
import { AppFactureComponent, AppFacturesComponent } from 'webapp'
// import { SigninComponent } from 'auth'

function App({}: {}) {
    const [factures] = useState([{
        id: null,
        numeroFacture: '',
        raisonSociale: 'La société de test',
        lastName: 'Boss',
        firstName: 'Baby',
        street: '',
        complement: '',
        cp: '',
        country: '',
        city: '',
        dateCreation: new Date(),
        dateEcheance: null,
        dateEcheanceOption: null,
        paymentOption: null,
        services: [{
            id: 0,
            description: 'test service',
            price: 500,
            quantity: 22,
            tva: 20,
            unite: ''
        }],
        paiements: [],
        pieceJointes: [],
        isFinal: false,
        isPaye: false
    }]);
    return <AppFacturesComponent value={factures} />
}

// function App({}: {}) {
//     const [slide, onSlide] = useState(0)
//     const [facture, onChange] = useState({
//         id: null,
//         numeroFacture: '',
//         raisonSociale: '',
//         lastName: '',
//         firstName: '',
//         street: '',
//         complement: '',
//         cp: '',
//         country: '',
//         city: '',
//         dateCreation: null,
//         dateEcheance: null,
//         dateEcheanceOption: null,
//         paymentOption: null,
//         services: [{
//             id: 0,
//             description: 'test service',
//             price: 500,
//             quantity: 22,
//             tva: 20,
//             unite: ''
//         }],
//         paiements: [],
//         pieceJointes: [],
//         isFinal: false,
//         isPaye: false
//     });

//     const account = {
//         city: 'Ville',
//         complement: '',
//         country: 'France',
//         firstName: 'John',
//         lastName: 'Doe',
//         street: '1 rue du paradis',
//         userId: '',
//         zipCode: '75001',
//         email: 'john.doe@mail.com',
//         numTva: '987654321',
//         siret: '12332198700013',
//         phone: '0912345634'
//     };
//     return <AppFactureComponent slide={slide} onSlide={onSlide} account={account} value={facture} onChange={onChange} readonly={false} />
// }

// function App() {
//     const [value, onChange] = useState({ login: '', password: '' });
//     return <SigninComponent value={value} onChange={onChange} />
// }

render(<App/>, document.getElementById("app"));


