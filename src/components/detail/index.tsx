import React, { ComponentType } from 'react';

export default function DetailComponentFactory({Racourci, Detail, PieceJointe, Paiement}: {
    Racourci: ComponentType<Components.Detail.TabActionProps>;
    Detail: ComponentType<Components.Detail.Props>;
    PieceJointe: ComponentType<Components.Detail.PieceJointeProps>;
    Paiement: ComponentType<Components.Detail.PaiementProps>;
}): ComponentType<Components.Detail.Props> { 
    return function DetailComponent({ value: facture, account, onChange, readonly }) {
        return <>
            <div className="container"><Racourci value={facture} onChange={onChange} /></div>
            <hr/>
            <div className="container">
                <nav className="nav nav-tabs">
                    <a className="nav-item nav-link active" href="#detail" data-toggle="tab">Detail de la facture</a>
                    {facture.id && <a className="nav-item nav-link" href="#piecejointe" data-toggle="tab">Pièces jointes</a> || ''}
                    {facture.id && <a className="nav-item nav-link" href="#paiement" data-toggle="tab">Paiement</a> || ''}
                </nav>

                <div className="tab-content">
                    <div className="tab-pane active" id="detail">
                        <Detail readonly={readonly} account={account} value={facture} onChange={onChange} />
                    </div>
                    <div className="tab-pane" id="piecejointe">
                        <PieceJointe 
                            facture={facture} 
                            readonly={readonly} 
                            onChangeFacture={onChange} />
                    </div>
                    <div className="tab-pane" id="paiement">
                        <Paiement 
                            facture={facture} 
                            readonly={facture.isPaye} 
                            onChangeFacture={onChange}
                        />
                    </div>
                </div>
            </div>
        </>
    }
}