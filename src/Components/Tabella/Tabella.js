import * as React from 'react';

export const Tabella = (props) => {
    return (
        <React.Fragment>
            <tr>
                <td>{props.data.name}</td>
                <td>{props.data.surname}</td>
                <td>{props.data.username}</td>
                <td>{props.data.repository}</td>
                <td>{props.data.commits}</td>
                <td>{props.data.creation_date}</td>
                <td>{props.data.last_update}</td>
            </tr>
        </React.Fragment>
    );
}