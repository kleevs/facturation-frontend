import type { App } from 'interface/src/facture'
import type { Textfield, Dropdown, Numberfield } from 'lib/src/main'
import React from 'react';
import styled from 'styled-components'

type Deps = {
    Textfield: typeof Textfield;
    Numberfield: typeof Numberfield;
    Dropdown: typeof Dropdown;
}

const Container = styled.div``
const ServiceContainer = styled.div``
const Title = styled.h1``
const Paragraphe = styled.p``
const Row = styled.div``
const Card = styled.div``
const Cross = styled.button``

const listUnites = [];
const dateEcheanceOptions = [];
const modePaiements = [];

export default ({Textfield, Numberfield, Dropdown}: Deps) =>
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
        <Container className="card shadow mb-4">
            <Title>Information vendeur</Title>

            <Card>
                <Paragraphe>{account.lastName} {account.firstName} {account.street} {account.complement}</Paragraphe>
                <Paragraphe>{account.zipCode} {account.city} {account.country}</Paragraphe>
                <Paragraphe>{account.phone}</Paragraphe>
                <Paragraphe>{account.email}</Paragraphe>
                <Row>Numéro de tva : {account.numTva}</Row>
                <Row>Numéro de siret : {account.siret}</Row>
            </Card>
        </Container>
        <Container>
            <Title>Information client</Title>
            <Textfield value={value.raisonSociale} onChange={(raisonSociale) => onChange({ ...value, raisonSociale })} />
            <Textfield disabled={readonly} value={value.lastName} onChange={(lastName) => onChange({ ...value, lastName })} />
            <Textfield disabled={readonly} value={value.firstName} onChange={(firstName) => onChange({ ...value, firstName })} />
            <Textfield disabled={readonly} value={value.street} onChange={(street) => onChange({ ...value, street })} />
            <Textfield disabled={readonly} value={value.complement} onChange={(complement) => onChange({ ...value, complement })} />
            <Textfield disabled={readonly} value={value.cp} onChange={(cp) => onChange({ ...value, cp })} />
            <Textfield disabled={readonly} value={value.city} onChange={(city) => onChange({ ...value, city })} />
            <Textfield disabled={readonly} value={value.country} onChange={(country) => onChange({ ...value, country })} />
        </Container>
        <Container>
            <Title>Services</Title>
            {value.services.map((service, i) => <ServiceContainer key={i}>
                <Cross type='button' onClick={() => onChange({...value, services: value.services.filter(_ => _ !== service)})} />
                <Numberfield disabled={readonly} value={service.price} onChange={(price) => onChangeService(i, { ...service, price })} />
                <Numberfield disabled={readonly} value={service.tva} onChange={(tva) => onChangeService(i, { ...service, tva })} />
                <Numberfield disabled={readonly} value={service.quantity} onChange={(quantity) => onChangeService(i, { ...service, quantity })} />
                <Dropdown<string> disabled={readonly} value={service.unite} onChange={(unite) =>  onChangeService(i, { ...service, unite })} options={listUnites} />
            </ServiceContainer>)}
        </Container>
        <Container>
            <Title>Echeance</Title>
            <Dropdown<number> disabled={readonly} value={value.dateEcheanceOption} onChange={(dateEcheanceOption) =>  onChange({...value, dateEcheanceOption})} options={dateEcheanceOptions} />
            <Dropdown<number> disabled={readonly} value={value.paymentOption} onChange={(paymentOption) =>  onChange({...value, paymentOption})} options={modePaiements} />
        </Container>
    </>
}
