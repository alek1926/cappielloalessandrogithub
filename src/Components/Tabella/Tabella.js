import * as React from "react";

export const Tabella = () => {
  return (
    <div className="Tabella">
  <tr id="tabellaSuperiore">
    <th>Cognome</th>
    <th>Nome</th>
    <th>Utente github</th>
    <th>Nome repo</th>
    <th>Totale Commit</th>
    <th>Data creazione</th>
    <th>Ultimo aggiornamento</th>
  </tr>
  <tr>
    <td>Mario</td>
    <td>Rossi</td>
    <td>mrossi</td>
    <td><a href="">rossi-mario-github</a></td>
    <td>2</td>
    <td>29/10/2021</td>
    <td>29/10/2021</td>

  </tr>
    </div>
  );
};