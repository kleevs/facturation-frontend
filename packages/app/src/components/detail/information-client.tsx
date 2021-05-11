import React, { ComponentType } from 'react';

export default function InformationClientFactory({}: {
}): ComponentType<Components.Detail.InformationClientProps> { 
    return function InformationClient ({ value, onChange, readonly }) {
        
        return <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Information client</h6>
            </div>
            <div className="card-body">
                <div className="input-group mb-3">
                    <input disabled={readonly} value={value.raisonSociale} onChange={(e) => onChange({ ...value, raisonSociale: e.target.value })} name="raisonSociale" type="text" className="form-control" placeholder="Raison sociale" />
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input disabled={readonly} value={value.lastName} onChange={(e) => onChange({ ...value, lastName: e.target.value })} name="lastname" type="text" className="form-control" placeholder="Nom du contact" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input disabled={readonly} value={value.firstName} onChange={(e) => onChange({ ...value, firstName: e.target.value })} name="firstname" type="text" className="form-control" placeholder="Prénom du contact" />
                        </div>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <input disabled={readonly} value={value.street} onChange={(e) => onChange({ ...value, street: e.target.value })} name="address" type="text" className="form-control" placeholder="Adresse" />
                </div>

                <div className="input-group mb-3">
                    <input disabled={readonly} value={value.complement} onChange={(e) => onChange({ ...value, complement: e.target.value })} name="complement" type="text" className="form-control" placeholder="Complément d'adresse" />
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="input-group mb-3">
                            <input disabled={readonly} value={value.cp} onChange={(e) => onChange({ ...value, cp: e.target.value })} name="cp" type="text" className="form-control" placeholder="CP" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="input-group mb-3">
                            <input disabled={readonly} value={value.city} onChange={(e) => onChange({ ...value, city: e.target.value })} name="city" type="text" className="form-control" placeholder="Ville" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="input-group mb-3">
                            <input disabled={readonly} value={value.country} onChange={(e) => onChange({ ...value, country: e.target.value })} name="country" type="text" className="form-control" placeholder="Pays" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
