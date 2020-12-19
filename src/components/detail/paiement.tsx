import React, { ComponentType } from 'react';

export default function PaiementFactory({createPaiement, removePaiement, parseDate}: {
    parseDate(v: string): Date;
    createPaiement: (id: number, v: App.IPaiement) => Promise<App.Facture>;
    removePaiement: (id: number, v: App.IPaiement) => Promise<App.Facture>;
}): ComponentType<Components.Detail.PaiementProps & {
    readonly value: App.IPaiement;
    onChange(value: App.IPaiement): void;
}> { 
    return function Paiement({ value, facture, onChange, onChangeFacture, readonly }) {
        return <div>
            <table className="table table-striped table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Action</th>
                        <th>Montant</th>
                        <th>Date de paiement</th>
                    </tr>
                </thead>
                <tbody>
                    {facture?.paiements?.map((paiement, i) => {
                        return <tr key={`paiement[${i}]`}>
                            <td><button type="button" onClick={(e) => removePaiement(facture?.id, paiement).then(onChangeFacture)}>Supprimer</button></td>
                            <td>{paiement.value}</td>
                            <td>{paiement.dateCreation}</td>
                        </tr>
                    })}
                    {(!readonly) && <tr>
                            <td><button type="button" onClick={(e) => createPaiement(facture?.id, {...value, id: 0}).then(onChangeFacture)}>Creer</button></td>
                            <td><input value={value.value} onChange={(e) => onChange({...value, value: +e.target.value})} type="text" className="form-control" placeholder="Montant" /></td>
                            <td><input value={value.dateCreation as any } 
                                onChange={(e) => onChange({...value, dateCreation: parseDate(e.target.value)})} 
                                type="text" className="form-control" placeholder="Date de paiement" /></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    }
}