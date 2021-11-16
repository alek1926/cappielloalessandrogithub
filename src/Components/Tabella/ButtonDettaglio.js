import * as React from 'react';
import { useState } from 'react';
import { arrayStates } from './arrayStates.js';
import { nascondiButton } from './nascondiButton.js';

export const ButtonDettaglio = (props) => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    arrayStates.push([showMore, setShowMore]);
    function handleMoreClick() {
        nascondiButton();
        setShowMore(!showMore);
    }
    return (
        <div className="ButtonDettaglio">
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore &&
            <tr id="trDettaglio">
                <td>{props.props.data.repos}</td>
            </tr>}
        </div>
    )
}