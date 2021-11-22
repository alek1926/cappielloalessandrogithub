import * as React from 'react';
import { Tabella } from '../Tabella/Tabella'

export const TabellaSuperiore = ( props ) => {

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
            <tbody>{props.loading ? <tr><th>Loading</th></tr> : props.repos && props.repos.map((repo, index) => <Tabella data={repo} key={index}/>)}</tbody>
            
            
        </table>
    );
}