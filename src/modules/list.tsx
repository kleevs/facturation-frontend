import ListingComponent from 'src/components/list';
import Layout from 'src/components/layout';
import { useState } from 'react';

export default function ListingModule({initialValue}: {initialValue: App.FactureLight[]}) { 
    const [state] = useState(initialValue);
    return <Layout><ListingComponent value={state}/></Layout>
}