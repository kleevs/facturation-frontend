import type { App } from 'interface/src/facture'
import type save from '../action/save'
import type { Textfield, Dropdown, Numberfield, Textarea, preventDefault } from 'lib/src/main'
import React from 'react';
import styled from 'styled-components'

type Deps = {
    Textfield: typeof Textfield;
    Numberfield: typeof Numberfield;
    Dropdown: typeof Dropdown;
    Textarea: typeof Textarea;
    preventDefault: typeof preventDefault;
    save: (typeof save) extends (...args) => infer T ? T : never;
}

const ServicesContainer = styled.div`
    display: grid;
    grid-gap: 10px;
`
const SubmitContainer = styled.div``
const EcheanceContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);

    [data-id=title] {
        grid-column: 1 / 3;
    }

    [data-id=echeance] {
        grid-column: 1;
    }

    [data-id=paiement] {
        grid-column: 2;
    }
`
const VendeurContainer = styled.div`
    p {
        margin: 0;
    }
`

const ClientContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 1fr);

    > [data-id=title] {
        grid-column: 1 / 7;
    }

    > [data-id=raison-sociale] {
        grid-column: 1 / 7
    }

    > [data-id=lastname] {
        grid-column: 1 / 4;
    }

    > [data-id=firstname] {
        grid-column: 4 / 7;
    }

    > [data-id=address] {
        grid-column: 1 / 7;
    }

    > [data-id=complement] {
        grid-column: 1 / 7;
    }

    > [data-id=cp] {
        grid-column: 1 / 4;
    }

    > [data-id=city] {
        grid-column: 4 / 7;
    }

    > [data-id=country] {
        grid-column: 1 / 7;
    }
`
const ServiceContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);

    > [data-id=remove] {
        grid-column: 1 / 4;
    }

    > [data-id=description] {
        grid-column: 1 / 4;
    }

    > [data-id=price] [data-id=quantity] [data-id=tva] {
        grid-column: 1;
    }
`
const Form = styled.form`
    padding: 1.2rem;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);

    ${VendeurContainer} {
        grid-column: 1;
    }

    ${ClientContainer} {
        grid-column: 2;
    }

    ${SubmitContainer} {
        grid-column: 1 / 3;
    }
`
const Title = styled.h1``
const Paragraphe = styled.p``
const Row = styled.div``
const Cross = styled.button``
const AddBtn = styled.button``
const SaveBtn = styled.button`
    width: 100%;
`
const dateEcheanceOptions = [
    { id: 1, label: "30 jours après l'envoi de la facture" },
    { id: 2, label: "60 jours après l'envoi de la facture" },
    { id: 3, label: "45 jours + fin du mois entamé" },
    { id: 4, label: "Paiement à la réception de la facture" },
    { id: 5, label: "Date personnalisée" },
];
const modePaiements = [
    {id: 1, label: "Chèque"},
    {id: 2, label: "Virement"},
    {id: 3, label: "Espèce"},
    {id: 4, label: "CB"},
    {id: 5, label: "Autre"}
];

export default ({Textfield, Numberfield, Dropdown, Textarea, preventDefault, save}: Deps) =>
function FactureComponent({ account, value, onChange, readonly }: {
    account: App.Account;
    value: App.Facture;
    onChange: (v: App.Facture) => void;
    readonly: boolean;
}) {
    const onChangeService = (index: number, service: App.IService) => onChange({
        ...value, 
        services: value.services.splice(index, 1, service)
    }) 
    return <Form onSubmit={(e) => preventDefault(e, () => save(value))}>
        <VendeurContainer className="card shadow mb-4">
            <Title>Information vendeur</Title>
            <Paragraphe>{account.lastName} {account.firstName}</Paragraphe>
            <Paragraphe>{account.street} {account.complement}</Paragraphe>
            <Paragraphe>{account.zipCode} {account.city}</Paragraphe>
            <Paragraphe>{account.country}</Paragraphe>
            <Paragraphe>{account.phone} {account.email}</Paragraphe>
            <Row>Numéro de tva : {account.numTva}</Row>
            <Row>Numéro de siret : {account.siret}</Row>
        </VendeurContainer>
        <ClientContainer>
            <Title data-id='title'>Information client</Title>
            <Textfield data-id='raison-sociale' placeholder='Raison sociale' disabled={readonly} value={value.raisonSociale} onChange={(raisonSociale) => onChange({ ...value, raisonSociale })} />
            <Textfield data-id='lastname' placeholder='Nom' disabled={readonly} value={value.lastName} onChange={(lastName) => onChange({ ...value, lastName })} />
            <Textfield data-id='firstname' placeholder='Prénom' disabled={readonly} value={value.firstName} onChange={(firstName) => onChange({ ...value, firstName })} />
            <Textfield data-id='address' placeholder='Adresse' disabled={readonly} value={value.street} onChange={(street) => onChange({ ...value, street })} />
            <Textfield data-id='complement' placeholder='Complément (Facultatif)' disabled={readonly} value={value.complement} onChange={(complement) => onChange({ ...value, complement })} />
            <Textfield data-id='cp' placeholder='CP' disabled={readonly} value={value.cp} onChange={(cp) => onChange({ ...value, cp })} />
            <Textfield data-id='city' placeholder='Ville' disabled={readonly} value={value.city} onChange={(city) => onChange({ ...value, city })} />
            <Textfield data-id='country' placeholder='Pays' disabled={readonly} value={value.country} onChange={(country) => onChange({ ...value, country })} />
        </ClientContainer>
        <ServicesContainer>
            <Title>Services / Marchandises</Title>
            <AddBtn onClick={() => onChange({...value, services: [...value.services, {} as App.IService]})}>Ajouter un service / marchandise</AddBtn>
            {value.services.map((service, i) => <ServiceContainer key={i}>
                <Cross data-id='remove' type='button' onClick={() => onChange({...value, services: value.services.filter(_ => _ !== service)})}>Supprimer</Cross>
                <Textarea data-id='description' placeholder="Description" disabled={readonly} value={service.description} onChange={(description) => onChangeService(i, { ...service, description })} />
                <Numberfield data-id='price' placeholder="Prix à l'unité (€)" disabled={readonly} value={service.price} onChange={(price) => onChangeService(i, { ...service, price })} />
                <Numberfield data-id='quantity' placeholder='Quantité' disabled={readonly} value={service.quantity} onChange={(quantity) => onChangeService(i, { ...service, quantity })} />
                <Numberfield data-id='tva' placeholder='Tva (%)' disabled={readonly} value={service.tva} onChange={(tva) => onChangeService(i, { ...service, tva })} />
            </ServiceContainer>)}
        </ServicesContainer>
        <EcheanceContainer>
            <Title data-id='title'>Echeance</Title>
            <Dropdown<typeof dateEcheanceOptions[0]> data-id='echeance' disabled={readonly} value={dateEcheanceOptions.find(_ => _.id === value.dateEcheanceOption)} onChange={({ id: dateEcheanceOption }) =>  onChange({...value, dateEcheanceOption})} options={dateEcheanceOptions} />
            <Dropdown<typeof modePaiements[0]> data-id='paiement' disabled={readonly} value={modePaiements.find(_ => _.id === value.paymentOption)} onChange={({ id: paymentOption }) =>  onChange({...value, paymentOption})} options={modePaiements} />
        </EcheanceContainer>
        <SubmitContainer>
            <SaveBtn type='submit'>Sauvegarder</SaveBtn>
        </SubmitContainer>
    </Form>
}
