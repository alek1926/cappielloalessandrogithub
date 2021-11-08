import * as React from 'react';

export const Tabella = (props) => {
    return (
        <React.Fragment>
            <tr>
                <td>{props.data.name}</td>
                <td>{props.data.surname}</td>
                <td>{props.data.login}</td>
                <td>{props.data.repos.map(repo => <li>{repo}</li>)}</td>
                <td>{props.data.repos.map(repo => <li>{Math.floor(Math.random() * (30 - 1) + 1)}</li>)}</td>
                <td>{props.data.creation_date.map(date => <li>{date}</li>)}</td>
                <td>{props.data.last_update.map(date => <li>{date}</li>)}</td>
            </tr>
        </React.Fragment>
    );
}