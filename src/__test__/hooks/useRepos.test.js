import { renderHook } from '@testing-library/react-hooks';
import {useRepos} from '../../hooks/useRepos';
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
    it('viene caricato correttamente e ritorna un array con almeno 1 elemento', ()=>{
        const { useReposInstance } = renderHook(()=>useRepos());
        expect(useReposInstance.current.repos).toBeDefined();
        expect(useReposInstance.current.repos.length).toBeGreaterThan(0);
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