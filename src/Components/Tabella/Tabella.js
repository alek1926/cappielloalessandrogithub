import * as React from 'react';
import { useState } from 'react';
import { arrayStates } from './arrayStates.js';
import { nascondiButton } from './nascondiButton.js';
export const Tabella = (props) => {
    const [showMore, setShowMore] = useState();
    arrayStates.push([showMore, setShowMore]);

    function handleDettaglio () {
        nascondiButton();
        setShowMore(!showMore);
    } 

    return (
        <React.Fragment>
            <tr>
                <td>{props.data.name}</td>
                <td>{props.data.surname}</td>
                <td>{props.data.login}</td>
                <td>{props.data.repos.map(repo => <li key={props.data.id}>{repo}</li>)}</td>
                <td>{props.data.repos.map(repo => <li key={props.data.id}>{Math.floor(Math.random() * (30 - 1) + 1)}</li>)}</td>
                <td>{props.data.creation_date.map(date => <li>{date}</li>)}</td>
                <td>{props.data.last_update.map(date => <li>{date}</li>)}</td>
                <td><button type="button" onClick={handleDettaglio}>{showMore ? 'Nascondi' : 'Mostra'} Dettaglio</button></td>
            </tr>
            {showMore &&
            <tr id="trDettaglio">
                <td>{props.data.name}</td>
                <td>{props.data.surname}</td>
                <td>{props.data.login}</td>
            </tr>}
                
        </React.Fragment>
    );
}