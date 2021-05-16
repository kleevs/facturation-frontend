import type { App } from 'interface/src/facture'
import type { Textarea, Numberfield, preventDefault } from 'lib/src/main'
import React, { useState } from 'react';
import styled from 'styled-components'

type Deps = {
    Textarea: typeof Textarea;
    Numberfield: typeof Numberfield;
    preventDefault: typeof preventDefault;
}

const Form = styled.form``

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    position: relative;
`
const Title = styled.h1``

const Body = styled.div`
    flew-grow: 1;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);

    > [data-id=remove] {
        grid-column: 1 / 4;
    }

    > [data-id=description] {
        grid-column: 1 / 4;
    }

    > [data-id=price] [data-id=quantity] [data-id=tva] {
        grid-column: 1;
    }
`
const Footer = styled.div`
`
const SaveBtn = styled.button`
    width: 100%;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: 50vh;
    border: 2px solid transparent;
    padding: 1rem 5rem;
`

export default ({Numberfield, Textarea, preventDefault}: Deps) =>
function ServiceComponent({ onAdd, initial, onCancel }: {
    initial: App.IService;
    onAdd: (v: App.IService) => void;
    onCancel: () => void;
}) {
    const [service, onChange] = useState<App.IService>(initial);
    return <Form onSubmit={(e) => preventDefault(e, () => onAdd({...service}))}>
        <Container>
            <Title></Title>
            <Body>
                <Textarea data-id='description' placeholder="Description" value={service.description} onChange={(description) => onChange({ ...service, description })} />
                <Numberfield data-id='price' placeholder="Prix à l'unité (€)" value={service.price} onChange={(price) => onChange({ ...service, price })} />
                <Numberfield data-id='quantity' placeholder='Quantité' value={service.quantity} onChange={(quantity) => onChange({ ...service, quantity })} />
                <Numberfield data-id='tva' placeholder='Tva (%)' value={service.tva} onChange={(tva) => onChange({ ...service, tva })} />
            </Body>
            <Footer>
                <SaveBtn data-id='cancel' type='button' onClick={onCancel}>Annuler</SaveBtn>
                <SaveBtn data-id='submit' type='submit'>Ajouter</SaveBtn>
                <SaveBtn data-id='cancel' type='button' onClick={() => onAdd(null)}>Supprimer</SaveBtn>
            </Footer>
        </Container>
    </Form>
}
