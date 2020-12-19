import React, { useState, ComponentType } from 'react';

export default function SigninContainerFactory({ Content }: {
    Content: ComponentType<Components.Signin.Props>
}) { 
    return function SigninContainer() {
        const [state, setState] = useState({ login: '', password: ''});

        return <Content value={state} onChange={setState} />
    }
}