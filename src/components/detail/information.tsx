import React, { ComponentType } from 'react';

export default function InformationFactory({ preventDefault, Client, Vendeur, Echeance, Service}: {
    preventDefault: Tools.Mixin.preventDefault;
    Client: ComponentType<Components.Detail.InformationClientProps>;
    Vendeur: ComponentType<Components.Detail.InformationVendeurProps>;
    Echeance: ComponentType<Components.Detail.EcheanceProps>;
    Service: ComponentType<Components.Detail.ServiceProps>;
}): ComponentType<Components.Detail.Props> { 
    return function Information({ value, account, onChange, readonly, save }) {
        return <form className="full-width center"  onSubmit={(e) => preventDefault(e, () => (save(value).then(onChange), false))}>
            <div className="row">
                <div className="col-md-6"><Vendeur value={account} /></div>
                <div className="col-md-6"><Client value={value} onChange={onChange} readonly={readonly} /></div>
            </div>

            <Echeance value={value} onChange={onChange} readonly={readonly} />

            {value?.services?.map((service, i) => <Service 
                key={`service_${i}`}
                title={`Service ${i+1}`}
                value={service} 
                onChange={(s) => { value.services[i] = s; onChange({...value}); }} 
                readonly={readonly} 
                remove={(s) => onChange({...value, services: value.services.filter((_,indx) => indx !== i)})}
            />)} 

            <hr/>
            <div>
                <button type="button" 
                onClick={() => onChange({ ...value, services: [...(value.services || []), { id: 0, description: '', quantity: 0, tva: 0, unite: '', price: 0 }]})} 
                className={`${readonly && "hidden"} btn btn-primary full-width attention-hover`}>Ajouter un service</button>
            </div>

            <hr/>
            <button type="submit" className={`${readonly && "hidden"} btn btn-primary full-width attention-hover`} data-content="Enregistrer la facture">Enregistrer</button>
        </form>
    }
}