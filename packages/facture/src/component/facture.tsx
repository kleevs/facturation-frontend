import type { App } from 'interface/src/facture'
import type { Textfield, Dropdown, Numberfield, Textarea } from 'lib/src/main'
import React from 'react';
import styled from 'styled-components'

type Deps = {
    Textfield: typeof Textfield;
    Numberfield: typeof Numberfield;
    Dropdown: typeof Dropdown;
    Textarea: typeof Textarea;
}

const Container = styled.div``
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

const Title = styled.h1``
const Paragraphe = styled.p``
const Row = styled.div``
const Cross = styled.button``
const AddBtn = styled.button``

const listUnites = [];
const dateEcheanceOptions = [];
const modePaiements = [];

export default ({Textfield, Numberfield, Dropdown, Textarea}: Deps) =>
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
    return <>
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
        <Container>
            <Title>Services</Title>
            <AddBtn onClick={() => onChange({...value, services: [...value.services, {} as App.IService]})} />
            {value.services.map((service, i) => <ServiceContainer key={i}>
                <Cross data-id='remove' type='button' onClick={() => onChange({...value, services: value.services.filter(_ => _ !== service)})} />
                <Textarea data-id='description' placeholder="Description" disabled={readonly} value={service.description} onChange={(description) => onChangeService(i, { ...service, description })} />
                <Numberfield data-id='price' placeholder="Prix à l'unité (€)" disabled={readonly} value={service.price} onChange={(price) => onChangeService(i, { ...service, price })} />
                <Numberfield data-id='tva' placeholder='Tva (%)' disabled={readonly} value={service.tva} onChange={(tva) => onChangeService(i, { ...service, tva })} />
                <Numberfield data-id='quantity' placeholder='Quantité' disabled={readonly} value={service.quantity} onChange={(quantity) => onChangeService(i, { ...service, quantity })} />
            </ServiceContainer>)}
        </Container>
        <Container>
            <Title>Echeance</Title>
            <Dropdown<number> disabled={readonly} value={value.dateEcheanceOption} onChange={(dateEcheanceOption) =>  onChange({...value, dateEcheanceOption})} options={dateEcheanceOptions} />
            <Dropdown<number> disabled={readonly} value={value.paymentOption} onChange={(paymentOption) =>  onChange({...value, paymentOption})} options={modePaiements} />
        </Container>
    </>
}
