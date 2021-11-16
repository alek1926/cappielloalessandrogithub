import * as React from 'react';
import { useState } from 'react';
import { arrayStates } from './arrayStates.js';
import { nascondiButton } from './nascondiButton.js';
import { ButtonDettaglio } from './ButtonDettaglio.js';
import { contaRepos, incrementaCounter, resetCounter, userCorrente, cambiaUserCorrente } from '../../api/contaRepos.js';

export const Tabella = (props) => {
    if (props.data.login != userCorrente) {
        resetCounter();
        cambiaUserCorrente(props.data.login);
    }
    incrementaCounter();
    return (
        <React.Fragment>
            <tr>
                <td>{props.data.surname}</td>
                <td>{props.data.name}</td>
                <td>{props.data.login}</td>
                <td>{props.repo}</td>
                <td>{Math.floor(Math.random() * (30 - 1) + 1)}</td>
                <td>{props.data.creation_date[contaRepos]}</td>
                <td>{props.data.last_update[contaRepos]}</td>
                <td>{props.data.repos.map(repo => <ButtonDettaglio props={props}></ButtonDettaglio>)}</td>
            </tr>

                
        </React.Fragment>
    );
}