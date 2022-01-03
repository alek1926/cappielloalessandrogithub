import * as React from 'react';
import { ButtonDettaglio } from './ButtonDettaglio.js';
import { DateTime } from "luxon";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


export const Tabella = (props) => {
    const dataCreazione = DateTime.fromISO(props.data.creationDate).toLocaleString(DateTime.DATETIME_MED);
    const dataUltimoUpdate = DateTime.fromISO(props.data.lastUpdate).toLocaleString(DateTime.DATETIME_MED);
    return (
        <React.Fragment>
            <TableRow>
                <TableCell>{props.data.surname}</TableCell>
                <TableCell>{props.data.name}</TableCell>
                <TableCell>{props.data.login}</TableCell>
                <TableCell>{props.data.repoName}</TableCell>
                <TableCell>{Math.floor(Math.random() * (30 - 1) + 1)}</TableCell>
                <TableCell>{dataCreazione}</TableCell>
                <TableCell>{dataUltimoUpdate}</TableCell>
                <TableCell align="center">{props.repo}<ButtonDettaglio props={props}/></TableCell>
            </TableRow>

                
        </React.Fragment>
    );
}