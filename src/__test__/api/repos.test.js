import * as axios from 'axios';
import { API_DOMAIN, API_PREFIX, API_REPOS, API_REPO } from '../../config/configApi';
import { listRepos, reposDetails } from '../../api/repos';
import { dataMock, reposMock } from './mock';
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
        try{
            const response = await axios.get(undefined);
            return response;
        }catch(error){
                expect(error.message).toEqual('The \"url\" argument must be of type string. Received undefined');
            }
    });



    it('prende un link giusto e la rete è giù, restituisce 500', async () => {
        
    });

    it('prende un link sbagliato e restituisce errore', async () => {
        try{
            const response = await axios.get('https://cikgghvcao.com');
            return response;
        }catch(error){
                expect(error.message).toContain('getaddrinfo ENOTFOUND');
            }
    });

    it('struttura della get sbagliata e restituisce 404', async () => {
        try{
            const response = await axios.get(API_DOMAIN + API_REPOS );
            return response;
        }catch(error){
                expect(error.message).toEqual('Request failed with status code 404');
            }
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

        try{
            await reposDetails(owner, repo);
        }catch(error){
            expect(error.message).toBe('Request failed with status code 500');
        }
        
    })
    it('riceve un link sbagliato e risponde con errore', async () =>{
        try{
            let response = await axios.get(
            'https://GNENEGNEGNIGNIGNI.COM');
          return response;
        }catch(error){
            expect(error.message).toContain('getaddrinfo ENOTFOUND');
          }
    })
});