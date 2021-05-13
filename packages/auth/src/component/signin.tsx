import type { Textfield, preventDefault } from 'lib/src/main'
import type signin from '../action/signin'
import React from 'react';
import styled from 'styled-components';

type Deps = {
    Textfield: typeof Textfield;
    preventDefault: typeof preventDefault;
    signin: (typeof signin) extends (...arg) => infer T ? T : typeof signin;
}

const Container = styled.div`
    display: grid;
    grid-gap: 10px;
`

const Form = styled.form`
    padding: 1.2rem;
`
type Value = {
    login: string;
    password: string;
}

export default ({ Textfield, preventDefault, signin }: Deps) => 
function SigninComponent({ value, onChange }: {
    value: Value; 
    onChange: (value: Value) => void;
}) {
    return <Form onSubmit={(e) => preventDefault(e, () => signin(value.login, value.password))}>
        <Container>
            <Textfield data-id='login' placeholder='Email' value={value.login} onChange={(login) => onChange({ ...value, login })} />
            <Textfield data-id='password' placeholder='Password' value={value.password} onChange={(password) => onChange({ ...value, password })} />
        </Container>
    </Form>
}