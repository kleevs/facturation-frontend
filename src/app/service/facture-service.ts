export class FactureService implements Service.FactureService {
  constructor(
    private readonly _ajax: Tools.Ajax
  ) {}

  save(facture: App.Facture): Promise<number> {
    return this._ajax.ajax<number>(`/api/facturation/${facture.id || ''}`, { method : facture.id && 'POST' || 'PUT', data: facture})
  }

  delete(id: number): Promise<unknown> {
    return this._ajax.ajax(`/api/facturation/${id}`, { method: 'DELETE' });
  }

  load(id: number): Promise<App.Facture> {
    return this._ajax.ajax<App.Facture>(`/api/facturation/${id}`, { method: 'GET' });
  }

  addPaiement(factureId: number, montant: number, dateCreation: Date) {
    return this._ajax.ajax(`/api/paiement`, { method : 'PUT', data: { dateCreation, montant, factureId }});
  }

  removePaiement(paiement: App.IPaiement) {
    return this._ajax.ajax(`/api/paiement/${paiement.id}`, { method : 'DELETE' });
  }

  addPieceJointe(factureId: number, files: unknown[]) {
    return this._ajax.ajaxFormData(`/api/piecejointe`, { method : 'PUT', data: { id: factureId, documents: files }});
  }

  removePieceJointe(factureId: number, filename: string) {
    return this._ajax.ajax(`/api/facturation/${factureId}/piecejointe/${filename}`, { method : 'DELETE'});
  }

  loadFactures(): Promise<App.Facture[]> {
    return this._ajax.ajax<App.Facture[]>(`/api/facturation`, { method: 'GET' });
  }
}