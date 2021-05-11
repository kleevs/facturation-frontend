import React, { ComponentType, useCallback } from 'react';
import {useHistory} from 'react-router-dom';

export default function ListComponentFactory({}: {
}): ComponentType<Components.List.Props> { 
    return function List({ value }: Components.List.Props) {
        const history = useHistory();
        const changeLocation = useCallback((href) => history.push(href), [history]);

        return <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Factures enregistrées</h6>
            </div>
            <div className="card-body p-0">
                <table className="table table-striped table-bordered table-hover m-0">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nom</th>
                            <th>Date de création</th>
                            <th>Date d'échéance</th>
                            <th>Montant ttc</th>
                            <th>Payé le</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value?.map((facture, i) => {
                            return <tr key={i} className="clickable" onClick={() => { changeLocation(`/facturation/${facture.id}`)}}>
                                <td>{facture.raisonSociale} - {facture.lastName} {facture.firstName}</td>
                                <td>{facture.dateCreation && facture.dateCreation}</td>
                                <td>{facture.dateEcheance && facture.dateEcheance}</td>
                                <td>{facture.services && facture.services.length > 0 && (
                                    facture.services.map(service => (service.tva + 100) * service.price * service.quantity / 100)
                                        .reduce((accumulator, currentValue) => accumulator + currentValue)
                                ) || 0}</td>
                                <td>{facture.paiements && facture.paiements.length > 0 && (
                                    // new Date(Math.max.apply(null, facture.paiements.map(_ => _.dateCreation)))
                                    ''
                                )}</td>
                            </tr>
                        })}
                    </tbody>
                </table>            
            </div>
        </div>
    }
}