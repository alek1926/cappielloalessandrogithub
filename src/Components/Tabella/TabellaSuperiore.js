import * as React from 'react';
import { useState } from 'react';
import { Tabella } from '../Tabella/Tabella'
import { listRepos } from '../../api/repos.js';
import { AggiornaRepos } from './AggiornaRepos';

export const TabellaSuperiore = () => {
    const [repos, setRepos] = useState(undefined);
    React.useEffect(() => {
        const populateRepos = async () => {
            setRepos(await listRepos());
        };
        populateRepos();
    }, [])
    let dataList = repos ? repos.map(repo => <Tabella data={repo} />) : 'Loading...'
    return (
        <table className="Tabella">
            <thead id="tabellaSuperiore">
                <tr>
                    <th>Cognome</th>
                    <th>Nome</th>
                    <th>Utente github</th>
                    <th>Nome repo</th>
                    <th>Totale commit</th>
                    <th>Data creazione</th>
                    <th>Ultimo aggiornamento</th>
                    <th>Dettaglio</th>
                </tr>
            </thead>
            <tbody>{dataList}</tbody>
            
            <AggiornaRepos></AggiornaRepos>
        </table>
    );
}