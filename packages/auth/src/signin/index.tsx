import { preventDefault, Textfield } from 'lib'
import signin from './action/signin-action'
import React from 'react';
import styled from 'styled-components';

export const SigninTextfield = styled(Textfield)`
    box-sizing: border-box;
    padding: 12px 30px 8px 10px;
    height: 50px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 1.42857;
    color: #3d5159;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
`

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

export default function Signin({ value, onChange }: {
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