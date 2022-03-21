import axios from 'axios';
import { API_DOMAIN, API_PREFIX, API_REPOS } from '../../config/configApi';
import {listRepos} from '../../api/repos';
describe('test chiamata get', ()=>{

    beforeAll(() => {
        jest.setTimeout(2000000)
    });

it('le variabili d\'ambiente non sono null', () =>{
    expect(API_DOMAIN).toBeDefined;
    expect(API_PREFIX).toBeDefined;
    expect(API_REPOS).toBeDefined;
});

it('prende un link giusto e ritorna elenco repos', async () =>{
    const get = (await listRepos());
    const ris = get.data.results;
    expect(ris).toContainEqual("name");
});

it('gli viene passato un link undefined e ritorna eccezione', () =>{
const response = axios.get(undefined);
expect(response).toThrow;
});



it('prende un link giusto e la rete è giù, restituisce 500', () =>{

});

it('prende un link sbagliato e restituisce 404', () =>{
const response = axios.get('ciao');
expect(response).toThrow;
});

it('struttura della get sbagliata e restituisce 404', () =>{
const response = axios.get(API_DOMAIN + API_REPOS + API_PREFIX);
expect(response).toThrow;
});


});