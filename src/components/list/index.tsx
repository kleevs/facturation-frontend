import React from 'react';
import ListComponentFactory from './list';

const Content = ListComponentFactory({});

export default function List(props: Components.List.Props) { 
    return <Content {...props}/>
}