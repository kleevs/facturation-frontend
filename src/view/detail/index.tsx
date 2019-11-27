import * as React from 'react';
import DetailOnglet from './detail';
import { useObserver } from '../../tool/react.extend';
import { Detail as App } from '../../app/page/detail';
import PaiementOnglet from './paiement';
import PieceJointeOnglet from './piecejointe';

export default function (props: { app: App }) {
    var facture = useObserver(props.app);
    var dateCreation = facture && facture.dateCreation;
    var id = facture && facture.id;
    var numero = facture && facture.id;
    var factureId = (dateCreation && id) && `${dateCreation.getFullYear() % 100}-${(dateCreation.getMonth()+1)}-${numero}`;
    var services = facture && facture.services || [];
    var totalHT = services.length > 0 && services.map(service => service.price * service.quantity).reduce((accumulator, currentValue) => accumulator + currentValue) || 0;
    var totalTTC =  services.length > 0 && (totalHT + services.map(service => service.tva * service.price * service.quantity / 100).reduce((accumulator, currentValue) => accumulator + currentValue)) || 0;
    
    return <div>
        <div className='row'>
            <div className="col-md-6">
                <h1 className="title">Facture n° {factureId}</h1> 
            </div>
            <div className="col-md-3">
                <h1 className="title">HT : {totalHT} €</h1>
            </div>
            <div className="col-md-3">
                <h1 className="title">TTC : {totalTTC} €</h1>
            </div>
        </div>
        <hr/>
        <div className="container">
            <nav className="nav nav-tabs">
                <a className="nav-item nav-link active" href="#detail" data-toggle="tab">Detail de la facture</a>
                {facture.id && <a className="nav-item nav-link" href="#piecejointe" data-toggle="tab">Pièces jointes</a> || ''}
                {facture.id && <a className="nav-item nav-link" href="#paiement" data-toggle="tab">Paiement</a> || ''}
            </nav>

            <div className="tab-content">
                <div className="tab-pane active" id="detail">
                   <DetailOnglet app={facture}/>
                </div>
                <div className="tab-pane" id="piecejointe">
                    <PieceJointeOnglet app={facture} />
                </div>
                <div className="tab-pane" id="paiement">
                    <PaiementOnglet app={facture} />
                </div>
            </div>
        </div>
    </div>
}