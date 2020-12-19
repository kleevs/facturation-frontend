import React, { ComponentType } from 'react';

export default function PieceJointeFactory({preventDefault, save}: {
    preventDefault: Tools.Mixin.preventDefault;
    save: (v: App.Facture) => Promise<App.Facture>;
}): ComponentType<Components.Detail.PieceJointeProps & {
    readonly value: App.PJ[];
    onChange(value: App.PJ[]): void;
}> { 
    return function PieceJointe({ value, facture, onChange, onChangeFacture, readonly }) {
        return <form className="full-width center"  onSubmit={(e) => preventDefault(e, () => { save({...facture, pieceJointes: [...facture.pieceJointes, ...value]}).then(onChangeFacture) })}>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    {!readonly && <div className="input-group mb-3">
                        <input type="file" value={value?.map(_ => _.file.name).join(";")} 
                            onChange={(e) => onChange(Array.from(e.target.files).map(_ => ({ file: _, uri: null  })))} 
                            multiple
                        />
                    </div> || ''}
                    <div>
                        {value?.map((file, i) => {
                            return <div key={`pj_${i}`} className="row">
                                <div className="col-md-6">Nom du fichier</div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        {/* <input name="firstname" value={file.name} onChange={(e) => file.name = e.target.value} type="text" className="form-control" placeholder="Nom du fichier" /> */}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="card-body">
                    {facture?.pieceJointes?.map((file, i) => {
                        return <div key={`pj_${i}`}>
                            <a target="_blank" href={`${file.uri}`}>{file}</a>
                            <span className="clickable text-primary" onClick={() => save({...facture, pieceJointes: facture.pieceJointes.filter(_ => _ !== file)}).then(onChangeFacture)}><i className="fa fa-trash"></i></span>
                        </div>
                    })}
                </div>
            </div>

            <div className={`${!value || value.length <= 0 ? "hidden" : ""} row mb-3`}>
                <div className="col-md-6">
                    <button className={`btn btn-primary full-width attention-hover`} type="submit">Upload</button>
                </div>
                <div className="col-md-6">
                    <button className={`btn btn-secondary full-width attention-hover`} type="button" onClick={() => onChange([])}>Annuler</button>
                </div>
            </div>
        </form>
    }
}