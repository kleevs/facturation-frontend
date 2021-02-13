import React from 'react';
import SigninFactory from 'src/components/signin/signin';
import { preventDefault } from 'src/tools/mixin';

const Content = SigninFactory({ preventDefault });

export default function AccountComponent(props: Components.Signin.Props) {
    return <Content {...props}/>
}