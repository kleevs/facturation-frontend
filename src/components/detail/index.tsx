import React from 'react';
import DetailComponent from 'src/components/detail/detail';
import tabActionFactory from 'src/components/detail/tab-action';
import InformationFactory from 'src/components/detail/information';
import InformationClientFactory from 'src/components/detail/information-client';
import InformationVendeurFactory from 'src/components/detail/information-vendeur';
import EcheanceFactory from 'src/components/detail/echeance';
import ServiceFactory from 'src/components/detail/service';
import PieceJointeFactory from 'src/components/detail/piecejointe';
import PaiementFactory from 'src/components/detail/paiement';
import { preventDefault } from 'src/tools/mixin';
import { parseDate } from 'src/tools/date';
import Layout from 'src/components/layout';
import { DateCreationField } from '../field';

const pdfUriBulder = (id: number) => `/api/facturation/${id}/pdf`;
const listPayments = [];
const listDateEcheances = [];
const listUnites = [];

const Client = InformationClientFactory({});
const Vendeur = InformationVendeurFactory({});
const Echeance = EcheanceFactory({ DateCreationField, parseDate, listDateEcheances, listPayments });
const Service = ServiceFactory({listUnites});
const Racourci = tabActionFactory({pdfUriBulder});
const Information = InformationFactory({ preventDefault, Client, Vendeur, Echeance, Service });
const PieceJointe = PieceJointeFactory({preventDefault});
const Paiement = PaiementFactory({parseDate });
const Content = DetailComponent({ Racourci, Detail: Information, PieceJointe, Paiement }) 

export default function Detail(props: Components.Detail.Props) {
    return <Layout><Content {...props} /></Layout>
}