import * as React from 'react';
import { useState } from 'react';
import { arrayStates } from './arrayStates.js';
import { nascondiButton } from './nascondiButton.js';

export const ButtonDettaglio = (props) => {
    const [showMore, setShowMore] = useState(false);
    arrayStates.push([showMore, setShowMore]);
    function handleMoreClick() {
        nascondiButton();
        setShowMore(!showMore);
    }
    return (
        <div className="ButtonDettaglio">
            <button onClick={handleMoreClick}>
                {showMore ? 'Nascondi' : 'Mostra'} dettagli
            </button>
            {showMore &&
            <div id="trDettaglio">
                {props.props.data.repoName}
            </div>}
        </div>
    )
}