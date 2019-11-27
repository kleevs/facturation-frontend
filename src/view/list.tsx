import * as React from 'react';
import { List as App } from '../app/page/list';
import { useObserver } from '../tool/react.extend';

export default function (props: { app: App }) {
    var app = useObserver(props.app);

    return <div className="container">
        <div className="row">
            <div className="col-md-12">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Action</th>
                            <th>Nom</th>
                            <th>Date de création</th>
                            <th>Date d'échéance</th>
                            <th>Payé le</th>
                        </tr>
                    </thead>
                    <tbody>
                        {app.factures.map((facture, i) => {
                            return <tr key={i}>
                                <td>
                                    <a href={`/facturations/${facture.id}`}><span className="far fa-square"></span></a>
                                </td>
                                <td>{facture.raisonSociale} - {facture.lastName} {facture.firstName}</td>
                                <td>{facture.dateCreation && facture.dateCreation.toString()}</td>
                                <td>{facture.dateEcheance && facture.dateEcheance.toString()}</td>
                                <td></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
