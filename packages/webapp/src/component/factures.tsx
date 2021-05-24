import type { App } from 'interface/src/facture'
import type { FacturesComponent } from 'facture'
import React from 'react'
import styled from 'styled-components'

type Deps = {
    FacturesComponent: typeof FacturesComponent;
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

export default ({FacturesComponent}: Deps) => 
function Factures({ value }: {
    value: App.Facture[];
}) {
    return <Container>
        <Nav>
            <BackBtn/>
        </Nav>
        <Body>
            <FacturesComponent value={value} />
        </Body>
    </Container>
}