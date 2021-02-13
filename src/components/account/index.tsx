import React from 'react';
import Layout from 'src/components/layout';
import AccountComponentFactory from 'src/components/account/account';
import { preventDefault } from 'src/tools/mixin';

const Content = AccountComponentFactory({ preventDefault });

export default function AccountComponent(props: Components.Account.Props) {
    return <Layout><Content {...props}/></Layout>
}