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
        const msg = "Request failed with status code 404";
        axios.get.mockRejectedValueOnce(msg);

        expect(() => listRepos()).rejects.toThrowError('Request failed with status code 404');
    });



    it('prende un link giusto e la rete è giù, restituisce 500', async () => {
        
    });

    it('prende un link sbagliato e restituisce errore ', async () => {
        const msg = "getaddrinfo ENOTFOUND"
        
        axios.get.mockRejectedValueOnce(msg);

        expect(() => listRepos()).rejects.toThrowError('getaddrinfo ENOTFOUND');
    });

    it('struttura della get sbagliata e restituisce 404', async () => {
        const msg = "Request failed with status code 404";
        axios.get.mockRejectedValueOnce(msg);

        expect(() => listRepos()).rejects.toThrowError('Request failed with status code 404');
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
        const msg = "Request failed with status code 500";
        axios.get.mockRejectedValueOnce(msg);

        expect(() => reposDetails()).rejects.toThrowError('Request failed with status code 500');

        
    })
    it('riceve un link sbagliato e risponde con errore', async () =>{
        const msg = "getaddrinfo ENOTFOUND"
        
        axios.get.mockRejectedValueOnce(msg);

        expect(() => reposDetails()).rejects.toThrowError('getaddrinfo ENOTFOUND');
    })
});