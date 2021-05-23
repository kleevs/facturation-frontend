import type { App } from 'interface'
import type { preventDefault } from 'lib'
import type save from '../service/save'
import React from 'react';

type Deps = {
    preventDefault: typeof preventDefault;
    save: (typeof save) extends (...arg) => infer T ? T : typeof save;
}

export default ({preventDefault, save}: Deps) =>
function AccountComponent({ value: account, onChange }: {
    readonly value: App.Account;
    onChange: (value: App.Account)=>void;
}) {
    return <form className="container-fluid" onSubmit={(e) => preventDefault(e, () => save({...account}))}>
        <div className="row">
            <div className="col-md-6 form-group">
                <label htmlFor="lastname">Nom</label>
                <input className="form-control" value={account.lastName} onChange={(e) => onChange({ ...account, lastName: e.target.value })} id="lastname" />
            </div>

            <div className="col-md-6 form-group">
                <label htmlFor="firstname">Prénom</label>
                <input className="form-control" value={account.firstName} onChange={(e) => onChange({ ...account, firstName: e.target.value })} id="firstname" />
            </div>

            <div className="col-md-6 form-group">
                <label htmlFor="street">Adresse</label>
                <input className="form-control" value={account.street} onChange={(e) => onChange({ ...account, street: e.target.value })} id="street" />
            </div>

            <div className="col-md-6 form-group">
                <label htmlFor="complement">Complément</label>
                <input className="form-control" value={account.complement} onChange={(e) => onChange({ ...account, complement: e.target.value })} id="complement" />
            </div>

            <div className="col-md-2 form-group">
                <label htmlFor="zipCode">Code postal</label>
                <input className="form-control" value={account.zipCode} onChange={(e) => onChange({ ...account, zipCode: e.target.value })} id="zipCode" />
            </div>

            <div className="col-md-4 form-group">
                <label htmlFor="city">Ville</label>
                <input className="form-control" value={account.city} onChange={(e) => onChange({ ...account, city: e.target.value })} id="city" />
            </div>

            <div className="col-md-6 form-group">
                <label htmlFor="country">Pays</label>
                <input className="form-control" value={account.country} onChange={(e) => onChange({ ...account, country: e.target.value })} id="country" />
            </div>

            <div className="col-md-6 form-group">
                <label htmlFor="phone">Tel</label>
                <input className="form-control" value={account.phone} onChange={(e) => onChange({ ...account, phone: e.target.value })} id="phone" />
            </div>

            <div className="col-md-6 form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control" value={account.email} onChange={(e) => onChange({ ...account, email: e.target.value })} id="email" />
            </div>

            <div className="col-md-6 form-group">
                <label htmlFor="siret">Siret</label>
                <input className="form-control" value={account.siret} onChange={(e) => onChange({ ...account, siret: e.target.value })} id="siret" />
            </div>

            <div className="col-md-6 form-group">
                <label htmlFor="numTva">Num tva</label>
                <input className="form-control" value={account.numTva} onChange={(e) => onChange({ ...account, numTva: e.target.value })} id="numTva" />
            </div>

            <button type="submit" className={`btn btn-primary full-width attention-hover`} data-content="Enregistrer">Enregistrer</button>
        </div>
    </form>
}