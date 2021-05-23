import type { App } from 'interface'
import type save from '../action/save'
import type Service from './service'
import type { Textfield, Dropdown, preventDefault, Modal } from 'lib'
import React, { useState } from 'react';
import styled from 'styled-components'

type Deps = {
    Textfield: typeof Textfield;
    Dropdown: typeof Dropdown;
    preventDefault: typeof preventDefault;
    Modal: typeof Modal;
    Service: (typeof Service) extends (...args) => infer T ? T : never;
    save: (typeof save) extends (...args) => infer T ? T : never;
}

const Slide = styled.form`
    padding: 1.2rem;
    height: 100%;
    width: 33.33%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
const Body = styled.div`
`
const ServicesContainer = styled(Slide)`
    ${Body} {
        flex-grow: 1;
    }
`
const EcheanceContainer = styled(Slide)`
    ${Body} {
        flex-grow: 1;

        select {
            width: 100%;
        }
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
const SlideInformation = styled(Slide)`
    ${ClientContainer} {
        flex-grow: 1;
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
const Container = styled.div`
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    position: relative;
`
const SlideWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 300%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: ${({ slide }: { slide: number }) => `-${slide * 100 || 0}%`};
    transition: left 0.4s ease-in-out;
`
const Title = styled.h1``
const Paragraphe = styled.p``
const Row = styled.div``
const Cross = styled.button``
const AddBtn = styled.button`
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: 50vh;
    border: 2px solid transparent;
    padding: 1rem 5rem;
`
const SaveBtn = styled.button`
    width: 100%;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: 50vh;
    border: 2px solid transparent;
    padding: 1rem 5rem;
`
const Footer = styled.div`
`
const ServiceInfo = styled.div``
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

export default ({Textfield, Dropdown, Modal, Service, preventDefault, save}: Deps) =>
function FactureComponent({ account, value, onChange, readonly, slide, onSlide }: {
    account: App.Account;
    value: App.Facture;
    onChange: (v: App.Facture) => void;
    readonly: boolean;
    slide: number;
    onSlide: (v: number) => void;
}) {
    const [serviceModal, setServiceModal] = useState<{ service: App.IService, index: number }>(null);
    return <Container>
        <Modal isOpened={!!serviceModal}>
            <Service 
                initial={serviceModal?.service} 
                onCancel={() => setServiceModal(null)}
                onAdd={(service) => { 
                    if (serviceModal.index === -1) {
                        onChange({...value, services: [...value.services, service]})
                    } else {
                        const services = service && [...value.services] || value.services.filter((_,i) => i !== serviceModal.index);
                        if (service) {
                            services[serviceModal.index] = service;
                        }
                        onChange({...value, services: services})
                    }
                    setServiceModal(null)
            }} />
        </Modal>
        <SlideWrapper slide={slide}>
            <SlideInformation onSubmit={(e) => preventDefault(e, () => onSlide(1))}>
                <VendeurContainer>
                    <Title>Vos informations</Title>
                    <Paragraphe>{account.lastName} {account.firstName}</Paragraphe>
                    <Paragraphe>{account.street} {account.complement}</Paragraphe>
                    <Paragraphe>{account.zipCode} {account.city}</Paragraphe>
                    <Paragraphe>{account.country}</Paragraphe>
                    <Paragraphe>{account.phone} {account.email}</Paragraphe>
                    <Row>Numéro de tva : {account.numTva}</Row>
                    <Row>Numéro de siret : {account.siret}</Row>
                </VendeurContainer>
                <ClientContainer>
                    <Title data-id='title'>Informations client</Title>
                    <Textfield data-id='raison-sociale' placeholder='Raison sociale' disabled={readonly} value={value.raisonSociale} onChange={(raisonSociale) => onChange({ ...value, raisonSociale })} />
                    <Textfield data-id='lastname' placeholder='Nom' disabled={readonly} value={value.lastName} onChange={(lastName) => onChange({ ...value, lastName })} />
                    <Textfield data-id='firstname' placeholder='Prénom' disabled={readonly} value={value.firstName} onChange={(firstName) => onChange({ ...value, firstName })} />
                    <Textfield data-id='address' placeholder='Adresse' disabled={readonly} value={value.street} onChange={(street) => onChange({ ...value, street })} />
                    <Textfield data-id='complement' placeholder='Complément (Facultatif)' disabled={readonly} value={value.complement} onChange={(complement) => onChange({ ...value, complement })} />
                    <Textfield data-id='cp' placeholder='CP' disabled={readonly} value={value.cp} onChange={(cp) => onChange({ ...value, cp })} />
                    <Textfield data-id='city' placeholder='Ville' disabled={readonly} value={value.city} onChange={(city) => onChange({ ...value, city })} />
                    <Textfield data-id='country' placeholder='Pays' disabled={readonly} value={value.country} onChange={(country) => onChange({ ...value, country })} />
                </ClientContainer>
                <Footer>
                    <SaveBtn type='submit'>Suivant</SaveBtn>
                </Footer>
            </SlideInformation>
            <ServicesContainer onSubmit={(e) => preventDefault(e, () => onSlide(2))}>
                <Title>Services / Marchandises</Title>
                <AddBtn type='button' onClick={() => setServiceModal({ service: {} as App.IService, index: -1 })}>Ajouter un service / marchandise</AddBtn>
                <Body>
                    {value.services.map((service, i) => <ServiceContainer key={i} onClick={() => setServiceModal({ service, index: i })}>
                        <ServiceInfo data-id='description'>Description : <p>{service.description}</p></ServiceInfo>
                        <ServiceInfo data-id='price'>Prix à l'unité (€) : {service.price}</ServiceInfo>
                        <ServiceInfo data-id='quantity'>Quantité : {service.quantity}</ServiceInfo>
                        <ServiceInfo data-id='tva'>Tva (%) : {service.tva}</ServiceInfo>
                    </ServiceContainer>)}
                </Body>
                <Footer>
                    <SaveBtn type='submit'>Suivant</SaveBtn>
                </Footer>
            </ServicesContainer>
            <EcheanceContainer onSubmit={(e) => preventDefault(e, () => save(value))}>
                <Title data-id='title'>Echeance</Title>
                <Body>
                    <Dropdown<typeof dateEcheanceOptions[0]> data-id='echeance' disabled={readonly} value={dateEcheanceOptions.find(_ => _.id === value.dateEcheanceOption)} onChange={({ id: dateEcheanceOption }) =>  onChange({...value, dateEcheanceOption})} options={dateEcheanceOptions} />
                    <Dropdown<typeof modePaiements[0]> data-id='paiement' disabled={readonly} value={modePaiements.find(_ => _.id === value.paymentOption)} onChange={({ id: paymentOption }) =>  onChange({...value, paymentOption})} options={modePaiements} />
                </Body>
                <Footer>
                    <SaveBtn data-id='submit' type='submit'>Sauvegarder</SaveBtn>
                </Footer>
            </EcheanceContainer>
        </SlideWrapper>
    </Container>
}
