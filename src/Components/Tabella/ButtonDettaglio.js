import * as React from 'react';
import { useState } from 'react';
import { arrayStates } from './arrayStates.js';
import { nascondiButton } from './nascondiButton.js';
import Button from '@mui/material/Button';
export const ButtonDettaglio = (props) => {
    const [showMore, setShowMore] = useState(false);
    arrayStates.push([showMore, setShowMore]);
    function handleMoreClick() {
        nascondiButton();
        setShowMore(!showMore);
    }


    return (        
        <div className="ButtonDettaglio">

            <Button size="large" style={{color: 'blue', fontSize: '10px'}} onClick={handleMoreClick}>
                Mostra dettagli
            </Button>
            
           
            
        </div>
    )
}