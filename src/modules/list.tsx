import ListingComponent from 'src/components/list';
import ListingContainer from 'src/containers/list';
import Layout from 'src/components/layout';

export default function ListingModule({initialValue}: {initialValue: App.FactureLight[]}) {
    const Content = ListingComponent({})
    const Result = ListingContainer({Content});   
    return <Layout><Result initialValue={initialValue}/></Layout>
}