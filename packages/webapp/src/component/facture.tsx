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
const Header = styled.nav`
    display: flex;
`
const Body = styled.div`
    flex-grow: 1;
`
const BackBtn = styled.button`
    display: inline-block;
    width: 3.6rem;
    height: 3.6rem;
    border: 2px solid transparent;
`

const Title = styled.div`
    display: inline-block;
    height: 3.6rem;
    flex-grow: 1;
    text-align: center;
    padding: 1.2rem;
    box-sizing: border-box;
`

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
        <Header>
            {<BackBtn type='button' onClick={() => onSlide(Math.max(slide-1, 0))}>Retour</BackBtn>}
            <Title>mFacture</Title>
        </Header>
        <Body>
            <FactureComponent slide={slide} onSlide={onSlide} account={account} value={value} onChange={onChange} readonly={readonly} />
        </Body>
    </Container>
}