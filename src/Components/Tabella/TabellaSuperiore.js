import * as React from 'react';
import { Tabella } from '../Tabella/Tabella'
import { createData } from '../../api/createData';

export const TabellaSuperiore = () => {
    const dataList = createData().map((data) => <Tabella key={data.username} data={data} />);
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
                </tr>
            </thead>
            <tbody>{dataList}</tbody>
        </table>
    );
}