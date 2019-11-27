import * as React from 'react';

export default function () { 
    return <div className="row">
        <div className="col-md-6">
            <a href="/facturations/new">Nouveau</a>
        </div>
        <div className="col-md-6">
            <a href="/facturations">Factures enregistrées</a>
        </div>
    </div>
}
