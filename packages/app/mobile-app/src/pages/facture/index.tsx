import type { App } from 'interface'
import { Textfield, Dropdown, preventDefault, Modal, Store } from 'lib'
import Service from './components/service'
import React, { useCallback, useState } from 'react';
import styled from 'styled-components'
import { moveOnHome, updateServices, PageFactureDetailData, saveFacture, IService, Facture } from 'facture-detail-page'
import { useSelector } from '../../hooks/use-selector';
import { useUserSession } from '../../hooks/use-user-session';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const Nav = styled.nav`
    display: flex;
    border-bottom: solid lightgrey;
`
const Body = styled.div`
    flex-grow: 1;
`
const BackBtn = styled.span`
    border-top: solid black;
    border-left: solid black;
    transform: rotate(-45deg);
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    background-color: transparent;
    margin: 5px;
`
const Header = styled.div`
    height: 2.4rem;
`

const BackHeaderContainer = styled.span``

const Slide = styled.form`
    padding: 1.2rem;
    height: 100%;
    width: 33.33%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
const BodyContent = styled.div`
`
const ServicesContainer = styled(Slide)`
    ${BodyContent} {
        flex-grow: 1;
    }
`
const EcheanceContainer = styled(Slide)`
    ${BodyContent} {
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
const Content = styled.div`
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

export function Facture({pageData}: { 
    pageData: Store<PageFactureDetailData>,
}) {
    const { account } = useUserSession(pageData, true);
    const [readonly] = useState(false);
    const facture = useSelector(pageData, ({ facture }) => facture);
    const [slide, onSlide] = useState(0);
    const [serviceModal, setServiceModal] = useState<{ service: IService, index: number }>(null);
    const setFacture = useCallback((facture: Facture) => pageData.update(current => ({...current, facture})), [pageData]);

    return !!facture && !!account && <Container>
        <Nav>
            <BackBtn onClick={() => moveOnHome(pageData)}/>
        </Nav>
        <Header>
            <BackHeaderContainer onClick={() => onSlide(Math.max(slide-1, 0))}>
                {slide === 0 && <>Nouvelle facture</> || <BackBtn/>}
                {slide === 1 && 'Vos informations' || 
                slide === 2 && 'Services et marchandises'}
            </BackHeaderContainer>
        </Header>
        <Body>
            <Content>
                <Modal isOpened={!!serviceModal}>
                    <Service 
                        initial={serviceModal?.service} 
                        onCancel={() => setServiceModal(null)}
                        onAdd={(service) => updateServices(pageData, service, serviceModal.index)} />
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
                            <Textfield data-id='raison-sociale' placeholder='Raison sociale' disabled={readonly} value={facture.raisonSociale} onChange={(raisonSociale) => setFacture({ ...facture, raisonSociale })} />
                            <Textfield data-id='lastname' placeholder='Nom' disabled={readonly} value={facture.lastName} onChange={(lastName) => setFacture({ ...facture, lastName })} />
                            <Textfield data-id='firstname' placeholder='Prénom' disabled={readonly} value={facture.firstName} onChange={(firstName) => setFacture({ ...facture, firstName })} />
                            <Textfield data-id='address' placeholder='Adresse' disabled={readonly} value={facture.street} onChange={(street) => setFacture({ ...facture, street })} />
                            <Textfield data-id='complement' placeholder='Complément (Facultatif)' disabled={readonly} value={facture.complement} onChange={(complement) => setFacture({ ...facture, complement })} />
                            <Textfield data-id='cp' placeholder='CP' disabled={readonly} value={facture.cp} onChange={(cp) => setFacture({ ...facture, cp })} />
                            <Textfield data-id='city' placeholder='Ville' disabled={readonly} value={facture.city} onChange={(city) => setFacture({ ...facture, city })} />
                            <Textfield data-id='country' placeholder='Pays' disabled={readonly} value={facture.country} onChange={(country) => setFacture({ ...facture, country })} />
                        </ClientContainer>
                        <Footer>
                            <SaveBtn type='submit'>Suivant</SaveBtn>
                        </Footer>
                    </SlideInformation>
                    <ServicesContainer onSubmit={(e) => preventDefault(e, () => onSlide(2))}>
                        <Title>Services / Marchandises</Title>
                        <AddBtn type='button' onClick={() => setServiceModal({ service: {} as App.IService, index: -1 })}>Ajouter un service / marchandise</AddBtn>
                        <BodyContent>
                            {facture.services.map((service, i) => <ServiceContainer key={i} onClick={() => setServiceModal({ service, index: i })}>
                                <ServiceInfo data-id='description'>Description : <p>{service.description}</p></ServiceInfo>
                                <ServiceInfo data-id='price'>Prix à l'unité (€) : {service.price}</ServiceInfo>
                                <ServiceInfo data-id='quantity'>Quantité : {service.quantity}</ServiceInfo>
                                <ServiceInfo data-id='tva'>Tva (%) : {service.tva}</ServiceInfo>
                            </ServiceContainer>)}
                        </BodyContent>
                        <Footer>
                            <SaveBtn type='submit'>Suivant</SaveBtn>
                        </Footer>
                    </ServicesContainer>
                    <EcheanceContainer onSubmit={(e) => preventDefault(e, () => saveFacture(pageData))}>
                        <Title data-id='title'>Echeance</Title>
                        <BodyContent>
                            <Dropdown<typeof dateEcheanceOptions[0]> data-id='echeance' disabled={readonly} value={dateEcheanceOptions.find(_ => _.id === facture.dateEcheanceOption)} onChange={({ id: dateEcheanceOption }) =>  setFacture({...facture, dateEcheanceOption})} options={dateEcheanceOptions} />
                            <Dropdown<typeof modePaiements[0]> data-id='paiement' disabled={readonly} value={modePaiements.find(_ => _.id === facture.paymentOption)} onChange={({ id: paymentOption }) =>  setFacture({...facture, paymentOption})} options={modePaiements} />
                        </BodyContent>
                        <Footer>
                            <SaveBtn data-id='submit' type='submit'>Sauvegarder</SaveBtn>
                        </Footer>
                    </EcheanceContainer>
                </SlideWrapper>
            </Content>
        </Body>
    </Container>
}
