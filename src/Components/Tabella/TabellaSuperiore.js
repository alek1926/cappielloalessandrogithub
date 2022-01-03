import * as React from 'react';
import { Tabella } from '../Tabella/Tabella';
import Table from '@mui/material/Table';
import { TableHead } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';


export const TabellaSuperiore = ( props ) => {

    return (
        <TableContainer>
            <Table className="Tabella">
             <TableHead id="tabellaSuperiore">
                <TableRow>
                    <TableCell align="center">Cognome</TableCell>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="center">Utente github</TableCell>
                    <TableCell align="center">Nome repo</TableCell>
                    <TableCell align="left">Totale commit</TableCell>
                    <TableCell align="left">Data creazione</TableCell>
                    <TableCell align="left">Ultimo aggiornamento</TableCell>
                    <TableCell align="center">Dettaglio</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>{props.loading ? <TableRow><TableHead>Loading</TableHead></TableRow> : props.repos && props.repos.map((repo, index) => <Tabella data={repo} key={index}/>)}</TableBody>
            
            
            </Table>
        </TableContainer>
    );
}