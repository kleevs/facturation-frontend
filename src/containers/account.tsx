import React, { useState, ComponentType } from 'react';

export default function AccountContainerFactory({ Content }: {
    Content: ComponentType<Components.Account.Props>
}) : ComponentType<{ initialValue: App.Account}> { 
    return function AccountContainer({ initialValue }) {
        const [state, setState] = useState(initialValue);
        return <Content value={state} onChange={setState} />
    }
}