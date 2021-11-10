import * as React from 'react';
import { Tabella } from '../Tabella/Tabella'
import { mergeData } from '../../api/mergeData';

export const TabellaSuperiore = () => {
    const dataList = mergeData().map((data) => <Tabella key={data.login} data={data} />);
    return (
        <table className="Table">
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