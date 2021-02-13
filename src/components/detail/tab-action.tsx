import React, { ComponentType } from 'react';

export default function TabActionFactory({ pdfUriBulder }: {
    pdfUriBulder: (id: number) => string;
}): ComponentType<Components.Detail.TabActionProps> { 
    return function TabAction({ value: facture, onChange, save, remove }) {
        var id = facture && facture.id;
        var numeroFacture = facture.numeroFacture;
        var services = facture && facture.services || [];
        var totalHT = services.length > 0 && services.map(service => service.price * service.quantity).reduce((accumulator, currentValue) => accumulator + currentValue) || 0;
        var totalTTC =  services.length > 0 && (totalHT + services.map(service => service.tva * service.price * service.quantity / 100).reduce((accumulator, currentValue) => accumulator + currentValue)) || 0;
    
        return <>
          <div className='row'>
              <div className="col-md-3">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      {numeroFacture && <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Facture n° {numeroFacture}</div>
                        <div className="row">
                          <div className="col-md-3">
                            <a target="_blank" href={pdfUriBulder(id)}>
                              <i className="fa fa-download"></i>
                            </a>
                          </div>

                          <div className="col-md-3">
                            <span onClick={() => save(facture).then(_ => onChange(_))} className="text-primary clickable">
                              <i className="fa fa-save"></i>
                            </span>
                          </div>

                          <div className="col-md-3">
                            <span onClick={() => remove(facture)} className="text-primary clickable">
                              <i className="fa fa-trash"></i>
                            </span>
                          </div>
                        </div>
                      </div> || ''}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Hors taxe</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{totalHT} €</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Taxe tous comprise</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{totalTTC} €</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </>
    }
}