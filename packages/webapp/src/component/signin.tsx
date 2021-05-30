import type { SigninComponent } from 'auth'
import React, { useState } from 'react'
import styled from 'styled-components'

type Deps = {
    SigninComponent: typeof SigninComponent;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`


export default ({SigninComponent}: Deps) => 
function AppSigninComponent() {
    const [value, onChange] = useState({ login: '', password: '' });

    return <Container>
        <SigninComponent value={value} onChange={onChange} />
    </Container>
}