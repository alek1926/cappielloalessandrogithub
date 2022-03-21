import axios from 'axios';
import { API_DOMAIN, API_PREFIX, API_REPOS } from '../../config/configApi';
import { listRepos } from '../../api/repos';
describe('test chiamata get', () => {

    beforeAll(() => {
        jest.setTimeout(2000000)
    });

    it('le variabili d\'ambiente non sono null', () => {
        expect(API_DOMAIN).not.toBe(undefined);
        expect(API_PREFIX).not.toBe(undefined);
        expect(API_REPOS).not.toBe(undefined);
    });

    it('prende un link giusto e ritorna elenco repos', async () => {
        const get = await listRepos();

        expect(get).toHaveProperty("data");
        const dati = get.data;

        const ris = dati.results;
        
        expect(ris.length).toBeGreaterThan(0);
        
        ris.forEach(e => {
            expect(e).toHaveProperty("repoName");
        })
        
    });

    it('gli viene passato un link undefined e ritorna eccezione', async () => {
        try{
            const response = await axios.get(undefined);
            return response;}
            catch(error){
                expect(error.message).toEqual('The \"url\" argument must be of type string. Received undefined');
            }
    });



    it('prende un link giusto e la rete è giù, restituisce 500', async () => {
/*      const get = await listRepos();
        const test = get.toString();
        expect(test).toEqual("Error: getaddrinfo ENOTFOUND github-funtion-ttf.azurewebsites.net");*/
    });

    it('prende un link sbagliato e restituisce errore', async () => {
        try{
            const response = await axios.get('https://cikgghcao.com');
            return response;}
            catch(error){
                expect(error.message).toContain('getaddrinfo ENOTFOUND');
            }
    });

    it('struttura della get sbagliata e restituisce 404', async () => {
        try{
            const response = await axios.get(API_DOMAIN + API_REPOS );
            return response;}
            catch(error){
                expect(error.message).toEqual('Request failed with status code 404');
            }
    });


});