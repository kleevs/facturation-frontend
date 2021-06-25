import type { App } from 'interface/src/facture'
import { FacturesComponent, loadFactures } from 'facture'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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

export default 
function Factures({onClick, redirectToSignin}: {
    onClick: (facture: App.Facture) => void;
    redirectToSignin: () => void;
}) {
    const [factures, setFactures] = useState<App.Facture[]>([]);

    useEffect(() => {
        loadFactures().then(setFactures).catch(({ status, ...arg }) => {
            if (status === 401) {
                redirectToSignin();
            }
        })
    }, [])

    return <Container>
        <Nav>
            <BackBtn/>
        </Nav>
        <Body>
            <FacturesComponent value={factures} onClick={onClick} />
        </Body>
    </Container>
}