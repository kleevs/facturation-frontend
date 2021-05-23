import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const Header = styled.nav``
const Body = styled.div`
    flex-grow: 1;
`

export default () =>
function Layout({onBack, children}: {
    children: unknown;
    onBack?: () => void;
}) {
    return <Container>
        <Header>
            {onBack && <button type='button' onClick={onBack}>Retour</button>}
            mFacture
        </Header>
        <Body>
            {children}
        </Body>
    </Container>
}