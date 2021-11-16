import * as React from 'react';
import { Tabella } from '../Tabella/Tabella'
import { mergeData } from '../../api/mergeData.js';


export const TabellaSuperiore = () => {
    console.log(mergeData())
    //    const dataList = mergeData().map((data) => <Tabella key={data.login} data={data} />);
    const dataList = mergeData().map(user => user.repos.map(repo => <Tabella data={user} repo={repo}> </Tabella>));
    
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
        </table>
    );
}