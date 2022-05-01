import { preventDefault, Store, Textfield } from 'lib'
import React, { useState } from 'react';
import styled from 'styled-components';
import { PageAuthData, signin } from 'auth-page'

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

const Content = styled.div`
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export function Auth({ pageData }: {
    pageData: Store<PageAuthData>;
}) {
    const [value, onChange] = useState({ login: '', password: '' });

    return <Container>
        <Form onSubmit={(e) => preventDefault(e, () => signin(pageData))}>
            <Content>
                <Title>Connexion</Title>
                <SigninTextfield data-id='login' placeholder='Email' value={value.login} onChange={(login) => onChange({ ...value, login })} />
                <SigninTextfield data-id='password' placeholder='Password' type='password' value={value.password} onChange={(password) => onChange({ ...value, password })} />
                <SubmitButton type='submit'>Me connecter</SubmitButton>
            </Content>
        </Form>
    </Container>
}