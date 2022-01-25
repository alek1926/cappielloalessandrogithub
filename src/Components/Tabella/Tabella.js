import * as React from 'react';
import { ButtonDettaglio } from './ButtonDettaglio.js';
import { DateTime } from "luxon";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import { Link, Outlet, Route, Routes } from "react-router-dom";

export const Tabella = (props) => {
    const dataCreazione = DateTime.fromISO(props.data.creationDate).toLocaleString(DateTime.DATETIME_MED);
    const dataUltimoUpdate = DateTime.fromISO(props.data.lastUpdate).toLocaleString(DateTime.DATETIME_MED);
    return (
        <React.Fragment>
            <TableRow>
            <TableCell><Avatar>{props.data.name[0]}{props.data.surname[0]}</Avatar></TableCell>
                <TableCell>{props.data.surname}</TableCell>
                <TableCell>{props.data.name}</TableCell>
                <TableCell>{props.data.login}</TableCell>
                <TableCell>{props.data.repoName}</TableCell>
                <TableCell>{Math.floor(Math.random() * (30 - 1) + 1)}</TableCell>
                <TableCell>{dataCreazione}</TableCell>
                <TableCell>{dataUltimoUpdate}</TableCell>
          <TableCell align="left"><Link to={`/repos/${props.data.idRepo}`} state={{ from: props.data }}><ButtonDettaglio props={props}/></Link>
          </TableCell>

            </TableRow>
            
        <Routes>
        <Route path="/repos/:props.data.idRepo" element={<ButtonDettaglio />} />
        </Routes>
        
            <Outlet />

                
        </React.Fragment>
    );
}