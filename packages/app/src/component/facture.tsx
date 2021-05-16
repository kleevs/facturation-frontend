import type { App } from 'interface/src/facture'
import type Layout from './layout'
import type { FactureComponent } from 'facture/src/main'
import React from 'react'

type Deps = {
    Layout: (typeof Layout) extends (...arg)=> infer T ? T : never;
    FactureComponent: typeof FactureComponent;
}

export default ({Layout, FactureComponent}: Deps) => 
function Facture({ account, value, onChange, readonly, slide, onSlide }: {
    account: App.Account;
    value: App.Facture;
    onChange: (v: App.Facture) => void;
    readonly: boolean;
    slide: number;
    onSlide: (v: number) => void;
}) {
    return <Layout onBack={() => onSlide(Math.max(slide-1, 0))}>
        <FactureComponent slide={slide} onSlide={onSlide} account={account} value={value} onChange={onChange} readonly={readonly} />
    </Layout>
}