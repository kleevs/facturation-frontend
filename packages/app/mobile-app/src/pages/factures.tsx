import { Card, Store } from 'lib'
import React, { useEffect } from 'react';
import styled from 'styled-components'
import { PageFactureListData, moveOnDetail, loadFactures } from 'facture-list-page'
import { useSelector } from '../hooks/use-selector';
import { useUserSession } from '../hooks/use-user-session';

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
export function Factures({ pageData }: {
    pageData: Store<PageFactureListData>;
}) {
    useUserSession(pageData, true);
    const factures = useSelector(pageData, ({factures}) => factures);

    useEffect(() => {
        loadFactures(pageData);
    }, [pageData])

    return <Container>
        <Nav>
            <BackBtn/>
        </Nav>
        <Body>
            {factures.map(facture => <Card 
                key={facture.id} 
                date={facture.dateCreation} 
                title={facture.raisonSociale || `${facture.lastName} ${facture.firstName}`} 
                price={facture.services.map(service => service.price * service.quantity * (100 + service.tva) / 100)
                    .reduce((a, b) => a + b, 0)
                }
                onClick={() => moveOnDetail(pageData, facture.id)}
            />)}     
        </Body>
    </Container>
}
