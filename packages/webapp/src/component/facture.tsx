import type { App } from 'interface/src/facture'
import type { FactureComponent } from 'facture'
import React from 'react'
import styled from 'styled-components'

type Deps = {
    FactureComponent: typeof FactureComponent;
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

export default ({FactureComponent}: Deps) => 
function Facture({ account, value, onChange, readonly, slide, onSlide }: {
    account: App.Account;
    value: App.Facture;
    onChange: (v: App.Facture) => void;
    readonly: boolean;
    slide: number;
    onSlide: (v: number) => void;
}) {
    return <Container>
        <Nav>
            <BackBtn/>
        </Nav>
        <Header>
            <BackHeaderContainer onClick={() => onSlide(Math.max(slide-1, 0))}>
                {slide === 0 && <>Nouvelle factue</> || <BackBtn/>}
                {slide === 1 && 'Vos informations' || 
                slide === 2 && 'Services et marchandises'}
            </BackHeaderContainer>
        </Header>
        <Body>
            <FactureComponent slide={slide} onSlide={onSlide} account={account} value={value} onChange={onChange} readonly={readonly} />
        </Body>
    </Container>
}