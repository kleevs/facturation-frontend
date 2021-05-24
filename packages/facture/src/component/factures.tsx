import type { App } from 'interface'
import type { Card } from 'lib'
import React from 'react';
import styled from 'styled-components'

type Deps = {
    Card: typeof Card;
}

const Container = styled.div``

export default ({Card}: Deps) =>
function FacturesComponent({ value }: {
    value: App.Facture[];
}) {
    return <Container>
        {value.map(facture => <Card 
            key={facture.id} 
            date={facture.dateCreation} 
            title={facture.raisonSociale || `${facture.lastName} ${facture.firstName}`} 
            price={facture.services.map(service => service.price * service.quantity * (100 + service.tva) / 100)
                .reduce((a, b) => a + b, 0)
            }
        />)}
    </Container>
}
