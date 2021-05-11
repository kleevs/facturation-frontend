import React, { ComponentType } from 'react';

export default function DetailComponentFactory({Racourci, Detail, PieceJointe, Paiement}: {
    Racourci: ComponentType<Components.Detail.TabActionProps>;
    Detail: ComponentType<Components.Detail.Props>;
    PieceJointe: ComponentType<Components.Detail.PieceJointeProps>;
    Paiement: ComponentType<Components.Detail.PaiementProps>;
}): ComponentType<Components.Detail.Props> { 
    return function DetailComponent({ value: facture, account, onChange, readonly, save, remove, createPaiement, removePaiement, savePieceJointe }) {
        return <>
            <div className="container"><Racourci value={facture} onChange={onChange} save={save} remove={remove} /></div>
            <hr/>
            <div className="container">
                <nav className="nav nav-tabs">
                    <a className="nav-item nav-link active" href="#detail" data-toggle="tab">Detail de la facture</a>
                    {facture.id && <a className="nav-item nav-link" href="#piecejointe" data-toggle="tab">Pièces jointes</a> || ''}
                    {facture.id && <a className="nav-item nav-link" href="#paiement" data-toggle="tab">Paiement</a> || ''}
                </nav>

                <div className="tab-content">
                    <div className="tab-pane active" id="detail">
                        <Detail 
                            readonly={readonly} account={account} value={facture} 
                            onChange={onChange} save={save} remove={remove} 
                            createPaiement={createPaiement}
                            removePaiement={removePaiement}
                            savePieceJointe={savePieceJointe}
                        />
                    </div>
                    <div className="tab-pane" id="piecejointe">
                        <PieceJointe 
                            facture={facture} 
                            readonly={readonly} 
                            onChangeFacture={onChange}
                            save={savePieceJointe}
                        />
                    </div>
                    <div className="tab-pane" id="paiement">
                        <Paiement 
                            createPaiement={createPaiement}
                            removePaiement={removePaiement}
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