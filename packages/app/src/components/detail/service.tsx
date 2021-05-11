import React, { ComponentType } from 'react';

export default function ServiceComponentFactory({listUnites}: {
    listUnites: { label: string; id: number }[];
}): ComponentType<Components.Detail.ServiceProps> { 
    return function ServiceComponent({ title, value: service, onChange, readonly, remove }) {
        return <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
                <div className="dropdown no-arrow">
                    <span onClick={() => remove(service)} className={`${readonly && "hidden"} text-primary clickable`}>
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <textarea disabled={readonly} value={service.description} onChange={(e) => onChange({ ...service, description: e.target.value })} className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <input disabled={readonly} value={service.price} onChange={(e) => onChange({ ...service, price: +e.target.value })} type="text" className="form-control" placeholder="Prix à l'unité" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <input disabled={readonly} value={service.tva} onChange={(e) => onChange({ ...service, tva: +e.target.value })} type="text" className="form-control" placeholder="TVA (%)" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <input disabled={readonly} value={service.quantity} onChange={(e) => onChange({ ...service, quantity: +e.target.value })} type="text" className="form-control" placeholder="Quantité" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Unité</span>
                                    </div>
                                    <select disabled={readonly} 
                                        value={service.unite} 
                                        onChange={(e) => onChange({ ...service, unite: e.target.value })} 
                                        className="form-control">
                                        {listUnites.map(opt => {
                                            return <option key={opt.id} value={opt.label}>{opt.label}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}