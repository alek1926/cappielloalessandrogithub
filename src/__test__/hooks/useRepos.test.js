/**
 * @jest-environment jsdom
 */
import { act, renderHook } from '@testing-library/react-hooks';
import {useRepos} from '../../hooks/useRepos';
import {dataMock} from '../api/mock/mock';
import {listRepos} from '../../api/repos';

jest.mock("axios");
jest.mock('../../api/repos', () =>{
    return {
        listRepos: jest.fn(),
      };
});
/*jest.mock('../../hooks/useRepos', () => ({
    loadData: () => [dataMock]
}));*/
//Happy path
//L'hook viene caricato e repos è un array con almeno 1 elemento
//Special cases
//L'hook viene caricato ma non ho risultati
//Edge cases
//Errore di connessione
//Errore 404
//Errore 500
//Altro errore (undefined)

describe('useRepos', () => {
    it('viene caricato correttamente e ritorna un array con almeno 1 elemento', async ()=>{
        listRepos.mockReturnValue(dataMock);

        const { result } = renderHook(() => useRepos());
        //await waitForNextUpdate();
        expect(result.current.repos).toEqual('ciao');
        expect(result.current.repos.length).toBeGreaterThan(0);
        /*
        jest.mock('../../hooks/useRepos', () => ({
            loadData: () => ({
            repos: 'ciao'})
        }));
        useRepos.mockReturnValue({
            loadData: jest.fn().mockResolvedValueOnce(dataMock),
          });
        result.current.loadData()
        act(()=>{
            result.current.listRepos();
        });*/
    });
    it('viene caricato ma non ritorna risultati', ()=>{
        
    });
    it('ritorna un errore di connessione', ()=>{
        
    });
    it('ritorna un errore 404', ()=>{
        
    });
    it('ritorna un errore 500', ()=>{
        
    });
    it('ritorna un errore undefined', ()=>{
        
    });
});