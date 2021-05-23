import type { preventDefault } from 'lib'
import type { SigninTextfield } from '../ui'
import type signin from '../action/signin'
import React from 'react';
import styled from 'styled-components';

type Deps = {
    SigninTextfield: typeof SigninTextfield;
    preventDefault: typeof preventDefault;
    signin: (typeof signin) extends (...arg) => infer T ? T : typeof signin;
}

const Container = styled.div`
    display: grid;
    grid-gap: 10px;
    margin: 3.6rem 1.2rem 0 1.2rem;
    padding: 10% 10%;
`

const Form = styled.form`
    padding: 1.2rem;
`

const Title = styled.h1``

const SubmitButton = styled.button`
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: 50vh;
    border: 2px solid transparent;
    padding: 1rem 5rem;
`

type Value = {
    login: string;
    password: string;
}

export default ({ SigninTextfield, preventDefault, signin }: Deps) => 
function SigninComponent({ value, onChange }: {
    value: Value; 
    onChange: (value: Value) => void;
}) {
    return <Form onSubmit={(e) => preventDefault(e, () => signin(value.login, value.password))}>
        <Container>
            <Title>Connexion</Title>
            <SigninTextfield data-id='login' placeholder='Email' value={value.login} onChange={(login) => onChange({ ...value, login })} />
            <SigninTextfield data-id='password' placeholder='Password' type='password' value={value.password} onChange={(password) => onChange({ ...value, password })} />
            <SubmitButton type='submit'>Me connecter</SubmitButton>
        </Container>
    </Form>
}