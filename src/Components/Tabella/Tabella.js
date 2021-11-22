import * as React from 'react';
import { ButtonDettaglio } from './ButtonDettaglio.js';
import { DateTime } from "luxon";

export const Tabella = (props) => {
    const dataCreazione = DateTime.fromISO(props.data.creationDate).toLocaleString(DateTime.DATETIME_MED);
    const dataUltimoUpdate = DateTime.fromISO(props.data.lastUpdate).toLocaleString(DateTime.DATETIME_MED);
    return (
        <React.Fragment>
            <tr>
                <td>{props.data.surname}</td>
                <td>{props.data.name}</td>
                <td>{props.data.login}</td>
                <td>{props.data.repoName}</td>
                <td>{Math.floor(Math.random() * (30 - 1) + 1)}</td>
                <td>{dataCreazione}</td>
                <td>{dataUltimoUpdate}</td>
                <td>{props.repo}<ButtonDettaglio props={props}/></td>
            </tr>

                
        </React.Fragment>
    );
}