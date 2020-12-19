import React, { useState, ComponentType } from 'react';

export default function PieceJointeContainerFactory({Content}: {
    Content: ComponentType<Components.Detail.PieceJointeProps & {
        readonly value: App.PJ[];
        onChange(value: App.PJ[]): void;
    }>
}) { 
    return function PieceJointeContainer(props: Components.Detail.PieceJointeProps) {
        const [state, setState] = useState([]);
        return <Content value={state} onChange={setState} {...props} />
    }
}