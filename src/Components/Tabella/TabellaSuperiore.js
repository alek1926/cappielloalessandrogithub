import * as React from "react";
import { Tabella } from './Tabella';
import  gitData  from '../../api/mock/data.json';

export const TabellaSuperiore = () => {
  const dataList = gitData.map((data) => <Tabella key={data.username} data={data} />);
  return (
    <table className="Tabella">
      <thead>
  <tr id="tabellaSuperiore">
    <th>Cognome</th>
    <th>Nome</th>
    <th>Utente github</th>
    <th>Nome repo</th>
    <th>Totale Commit</th>
    <th>Data creazione</th>
    <th>Ultimo aggiornamento</th>
  </tr>
  </thead>
  <tbody>{dataList}</tbody>
  </table>

  
  );
};