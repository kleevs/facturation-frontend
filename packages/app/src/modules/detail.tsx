import { Ajax } from 'src/tools/ajax';
import { FactureAction } from 'src/action/facture';
import { FactureService } from 'src/service/facture-service';
import { success, error } from 'src/tools/notify';
import { useState } from 'react';
import Detail from 'src/components/detail';

const ajaxTool = new Ajax(); 
const service = new FactureService(ajaxTool);
const actions = new FactureAction(service, { success, error });
const save = (v: App.Facture) => actions.save(v);
const remove = (removeDone: () => void) => (v: App.Facture) => actions.remove(v).then(removeDone);
const createPaiement = (id: number, v: App.IPaiement) => actions.createPaiement(id, v);
const removePaiement = (id: number, v: App.IPaiement) => actions.removePaiement(id, v);
const savePieceJointe = (v: App.Facture) => actions.savePieceJointe(v);

export default function DetailModule({initialValue, removeDone}: {
    initialValue: App.Facture,
    removeDone: () => void;
}) {
    const [state, setState] = useState(initialValue);

    return <Detail 
        savePieceJointe={savePieceJointe}
        value={state} onChange={setState}  
        account={{} as any} 
        readonly={state.isFinal} 
        save={save} remove={remove(removeDone)} 
        createPaiement={createPaiement}
        removePaiement={removePaiement}
    />
}