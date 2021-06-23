import type { App } from 'interface'
import { Card } from 'lib'
import React from 'react';
import styled from 'styled-components'

const Container = styled.div``

export default
function FacturesComponent({ value, onClick }: {
    value: App.Facture[];
    onClick: (facture: App.Facture) => void;
}) {
    return <Container>
        {value.map(facture => <Card 
            key={facture.id} 
            date={facture.dateCreation} 
            title={facture.raisonSociale || `${facture.lastName} ${facture.firstName}`} 
            price={facture.services.map(service => service.price * service.quantity * (100 + service.tva) / 100)
                .reduce((a, b) => a + b, 0)
            }
            onClick={() => onClick(facture)}
        />)}
    </Container>
}
