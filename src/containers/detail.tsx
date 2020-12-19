import React, { useState, ComponentType } from 'react';

export default function DetailContainerFactory({Content}: {
    Content: ComponentType<Components.Detail.Props>
}) { 
    return function DetailContainer({initialValue, account}: {
        initialValue: App.Facture; 
        account: App.Account
    }) {
        const [state, setState] = useState(initialValue);
        return <Content value={state} onChange={setState}  account={account} readonly={state.isFinal} />
    }
}