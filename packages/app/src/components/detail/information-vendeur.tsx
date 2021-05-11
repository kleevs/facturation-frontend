import React, { ComponentType } from 'react';

export default function InformationVendeurFactory ({}: {
}): ComponentType<Components.Detail.InformationVendeurProps> { 
    return function InformationVendeur({ value: account }) {
        return <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                    Information vendeur
                </h6>
            </div>
            <div className="card-body">
                <p className="mb-1">{account.lastName} {account.firstName} {account.street} {account.complement}</p>
                <p className="mb-1">{account.zipCode} {account.city} {account.country}</p>
                <p className="mb-1">{account.phone}</p>
                <p className="mb-1">{account.email}</p>
                <div className="mb-1">Numéro de tva : {account.numTva}</div>
                <div className="mb-1">Numéro de siret : {account.siret}</div>
            </div>
        </div>
    }
}
