import type { App } from 'interface'

export default () => 
function loadAccount(): Promise<App.Account> {
  return Promise.resolve({
    city: 'Ville',
    complement: '',
    country: 'France',
    firstName: 'John',
    lastName: 'Doe',
    street: '1 rue du paradis',
    userId: '',
    zipCode: '75001',
    email: 'john.doe@mail.com',
    numTva: '987654321',
    siret: '12332198700013',
    phone: '0912345634'
  });
}