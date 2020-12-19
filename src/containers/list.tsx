import React, { useState, ComponentType } from 'react';

export default function ListContainerFactory({Content}: {
    Content: ComponentType<Components.List.Props>
}) { 
    return function ListContainer({initialValue}: {initialValue: App.FactureLight[]}) {
        const [state] = useState(initialValue || []);

        return <Content value={state} />
    }
}