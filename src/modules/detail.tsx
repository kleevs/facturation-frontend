import DetailComponent from 'src/components/detail';
import DetailContainer from 'src/containers/detail';
import Layout from 'src/components/layout';
import tabActionFactory from 'src/components/detail/tab-action';
import InformationFactory from 'src/components/detail/information';
import InformationClientFactory from 'src/components/detail/information-client';
import InformationVendeurFactory from 'src/components/detail/information-vendeur';
import EcheanceFactory from 'src/components/detail/echeance';
import ServiceFactory from 'src/components/detail/service';
import PieceJointeFactory from 'src/components/detail/piecejointe';
import PaiementFactory from 'src/components/detail/paiement';
import PaiementContainerFactory from 'src/containers/paiement';
import PieceJointeContainerFactory from 'src/containers/pieceJointe';
import { Ajax } from 'src/tools/ajax';
import { FactureAction } from 'src/app/action/facture';
import { FactureService } from 'src/app/service/facture-service';
import { preventDefault } from 'src/tools/mixin';
import { parseDate } from 'src/tools/date';
import { success, error } from 'src/tools/notify';

export default function DetailModule({initialValue, removeDone}: {
    initialValue: App.Facture,
    removeDone: () => void;
}) {
    const ajaxTool = new Ajax(); 
    const service = new FactureService(ajaxTool);
    const actions = new FactureAction(service, { success, error });
    const pdfUriBulder = (id: number) => `/api/facturation/${id}/pdf`;
    const save = (v: App.Facture) => actions.save(v);
    const createPaiement = (id: number, v: App.IPaiement) => actions.createPaiement(id, v);
    const removePaiement = (id: number, v: App.IPaiement) => actions.removePaiement(id, v);
    const savePieceJointe = (v: App.Facture) => actions.savePieceJointe(v);
    const remove = (v: App.Facture) => actions.remove(v).then(removeDone);
    const listPayments = [];
    const listDateEcheances = [];
    const listUnites = [];
    
    const Client = InformationClientFactory({});
    const Vendeur = InformationVendeurFactory({});
    const Echeance = EcheanceFactory({ parseDate, listDateEcheances, listPayments });
    const Service = ServiceFactory({listUnites});
    const Racourci = tabActionFactory({pdfUriBulder, save, remove});
    const Detail = InformationFactory({ save, preventDefault, Client, Vendeur, Echeance, Service });
    const PieceJointeComponent = PieceJointeFactory({save: savePieceJointe, preventDefault});
    const PaiementComponent = PaiementFactory({parseDate, createPaiement, removePaiement});
    const PieceJointe = PieceJointeContainerFactory({ Content: PieceJointeComponent });
    const Paiement = PaiementContainerFactory({ Content: PaiementComponent });
    const Content = DetailComponent({ Racourci, Detail, PieceJointe, Paiement })
    const Result = DetailContainer({Content});   
    return <Layout><Result initialValue={initialValue} account={{} as any}/></Layout>
}