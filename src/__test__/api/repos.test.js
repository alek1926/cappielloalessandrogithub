import * as axios from 'axios';
import { API_DOMAIN, API_PREFIX, API_REPOS, API_REPO } from '../../config/configApi';
import { listRepos, reposDetails } from '../../api/repos';
import { dataMock, reposMock } from './mock/mock';
jest.mock("axios");

describe('listRepos', () => {

    beforeAll(() => {
        jest.setTimeout(2000000)
    });

    it('le variabili d\'ambiente non sono null', () => {
        expect(API_DOMAIN).not.toBe(undefined);
        expect(API_PREFIX).not.toBe(undefined);
        expect(API_REPOS).not.toBe(undefined);
    });

    it('prende un link giusto e ritorna elenco repos', async () => {
        axios.get.mockResolvedValueOnce(dataMock);

        const response =  await listRepos();

        
        expect(response.length).toBeGreaterThan(0);
        
        response.forEach(e => {
            expect(e).toHaveProperty("repoName");
        })

        expect(response).toEqual(dataMock);
        
        
    });

    it('gli viene passato un link undefined e ritorna eccezione', async () => {

            const response = await axios.get(undefined);

                expect(response).toThrow;
    });



    it('prende un link giusto e la rete è giù, restituisce 500', async () => {
        
    });

    it('prende un link sbagliato e restituisce errore', async () => {

            const response = await axios.get('https://cikgghvcao.com');
            expect(response).toThrow;
    });

    it('struttura della get sbagliata e restituisce 404', async () => {

            const response = await axios.get(API_DOMAIN + API_REPOS );

                expect(response).toThrow;
    });


});

describe('reposDetails', ()=>{

    it('riceve dei parametri giusti e risponde con dati corretti', async()=>{
        axios.get.mockResolvedValueOnce(reposMock);
        const owner = 'gabrysili';
        const repo = 'silipigni-gabriele-github';
        
        const response = await reposDetails(owner, repo);

        expect(response).toEqual(reposMock);
    });

    it('riceve dei parametri sbagliati e risponde con errore 500', async () =>{
        const owner = 'jadjisjdisj';
        const repo = 'dsjksa-fdsij-github';

            await reposDetails(owner, repo);
            expect(reposDetails).toThrow;

        
    })
    it('riceve un link sbagliato e risponde con errore', async () =>{
 
            let response = await axios.get(
            'https://GNENEGNEGNIGNIGNI.COM');
          expect(response).toThrow;
    })
});