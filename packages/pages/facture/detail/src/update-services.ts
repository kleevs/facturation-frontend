import { IService, PageFactureDetailData } from './type'
import { Store } from 'lib'

export async function updateServices(store: Store<PageFactureDetailData>, service: IService, index: number) {
    const { facture } = store.getValue();

    if (index === -1) {
        store.update((current) => ({...current, facture: {...facture, services: [...facture.services, service]}}));
    } else {
        const services = facture.services?.filter((_,i) => i !== index) || [];
        if (service) {
            services[index] = service;
        }
        store.update((current) => ({...current, facture: {...facture, services: services}}));
    }
}