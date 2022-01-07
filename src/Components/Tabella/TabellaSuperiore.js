import * as React from 'react';
import { Tabella } from '../Tabella/Tabella';
import Table from '@mui/material/Table';
import { TableHead } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

export const TabellaSuperiore = ( props ) => {
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
}));
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Avatar</StyledTableCell>
                        <StyledTableCell>Cognome</StyledTableCell>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>Utente github</StyledTableCell>
                        <StyledTableCell>Nome repo</StyledTableCell>
                        <StyledTableCell>Totale commit</StyledTableCell>
                        <StyledTableCell>Data creazione</StyledTableCell>
                        <StyledTableCell>Ultimo aggiornamento</StyledTableCell>
                        <StyledTableCell>Dettaglio</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{props.loading ? <TableRow><TableCell><CircularProgress /></TableCell></TableRow> : props.repos && props.repos.filter(repo => repo.repoName.includes(props.keywords)).map(repo => <Tabella data={repo} key={repo.repoName} />)}</TableBody>
            </Table>
        </TableContainer>
    );
}