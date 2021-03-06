import React, { ComponentType } from 'react';

export default function EcheanceFactory({DateCreationField, parseDate, listDateEcheances, listPayments}: {
    DateCreationField: ComponentType<{value:Date; onChange:(v: Date)=>void;readonly:boolean;}>
    parseDate(v: string): Date;
    listPayments: { label: string; id: number }[];
    listDateEcheances: { label: string; id: number }[];
}): ComponentType<Components.Detail.EcheanceProps> { 
    return function Echeance({ value, onChange, readonly }) {
        return <div className="card-body">
            <div className="row">
                <div className="col-md-4">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Date de création</span>
                            </div>
                            <DateCreationField value={value.dateCreation} onChange={(v) => onChange({...value, dateCreation: v})} readonly={readonly} />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Date d'échéance</span>
                        </div>
                        <select disabled={readonly} 
                            value={value.dateEcheanceOption} 
                            onChange={(e) => onChange({ ...value, dateEcheanceOption: +e.target.value })} 
                            name="dateEcheance" className="form-control">
                            {listDateEcheances.map(opt => {
                                return <option key={opt.id} value={opt.id}>{opt.label}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Mode de paiement</span>
                        </div>
                        <select disabled={readonly} 
                            value={value.paymentOption} 
                            onChange={(e) => onChange({ ...value, paymentOption: +e.target.value })} 
                            name="payment" className="form-control">
                            {listPayments.map(opt => {
                                return <option key={opt.id} value={opt.id}>{opt.label}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    }
}
