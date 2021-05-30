import type { App } from 'interface'
import type { FactureComponent } from 'facture'
import type { loadAccount } from 'account'
import type loadFacture from '../service/load-facture'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type Deps = {
    FactureComponent: typeof FactureComponent;
    loadAccount: typeof loadAccount;
    loadFacture: ReturnType<typeof loadFacture>;
}

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

export default ({FactureComponent, loadFacture, loadAccount}: Deps) => 
function Facture() {
    const [readonly] = useState(false);
    const [facture, setFacture] = useState<App.Facture>(null);
    const [account, setAccount] = useState<App.Account>(null);
    const [slide, onSlide] = useState(0);

    useEffect(() => {
        loadFacture().then(setFacture)
        loadAccount().then(setAccount)
    }, [])

    return <Container>
        <Nav>
            <BackBtn/>
        </Nav>
        <Header>
            <BackHeaderContainer onClick={() => onSlide(Math.max(slide-1, 0))}>
                {slide === 0 && <>Nouvelle facture</> || <BackBtn/>}
                {slide === 1 && 'Vos informations' || 
                slide === 2 && 'Services et marchandises'}
            </BackHeaderContainer>
        </Header>
        <Body>
            {facture && account && <FactureComponent slide={slide} onSlide={onSlide} account={account} value={facture} onChange={setFacture} readonly={readonly} />}
        </Body>
    </Container>
}