import { SigninComponent } from 'auth'
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`


export default
function AppSigninComponent({redirectToUrl}: {
    redirectToUrl: () => void;
}) {
    const [value, onChange] = useState({ login: '', password: '' });

    return <Container>
        <SigninComponent value={value} onChange={onChange} redirectToUrl={redirectToUrl} />
    </Container>
}