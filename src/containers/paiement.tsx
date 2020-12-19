import React, { useState, ComponentType } from 'react';

export default function PaiementContainerFactory({Content}: {
    Content: ComponentType<Components.Detail.PaiementProps & {
        readonly value: App.IPaiement;
        onChange(value: App.IPaiement): void;
    }>
}) { 
    return function PaiementContainer(props: Components.Detail.PaiementProps) {
        const [state, setState] = useState<App.IPaiement>({ id: 0, dateCreation: new Date(), value: undefined });
        return <Content value={state} onChange={setState} {...props} />
    }
}