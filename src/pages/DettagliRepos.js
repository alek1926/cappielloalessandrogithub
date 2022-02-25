import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { DateTime } from "luxon";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useReposDetails } from '../hooks/useReposDetails';
import CircularProgress from '@mui/material/CircularProgress';
import { Paper } from '@mui/material';
import {userMock} from "../api/user.js";

export const DettagliRepos = () => {
    const [user] = useState(userMock);
    const location = useLocation();
    const { from } = user.session ? location.state : "";
    const { dettagli, error, isError } = useReposDetails(from);
    if (dettagli == null) return <CircularProgress />;
    const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    }));
    return (
     <div>
        {isError ? <div>{error}</div> :
         <div>
         <h1>{dettagli.name} {dettagli.surname}</h1>
         <h3>{dettagli.repoName}</h3>
         <Grid container 
         spacing={2}  
         justifyContent="center">
         {dettagli.commits.map(e=>
         <Grid item key={e.committer.date}>
            <Item>
                <Card >
                    <CardContent>
                        <h4>nome: {e.committer.name}</h4>
                        <h4>email: {e.committer.email}</h4>
                        <h4>data: {DateTime.fromISO(e.committer.date).toLocaleString(DateTime.DATETIME_MED)}</h4>
                        <h4>messaggio: {e.message}</h4>
                    </CardContent>
                </Card>
            </Item>
         </Grid>
         )}
         </Grid>
         </div>}
         </div>
         )}

