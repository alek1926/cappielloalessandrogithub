import * as React from 'react';
import { useState } from 'react';
import { arrayStates } from './arrayStates.js';
import { nascondiButton } from './nascondiButton.js';
import Button from '@mui/material/Button';
export const ButtonDettaglio = (props) => {



    return (        
        <div className="ButtonDettaglio">

            <Button size="large" style={{color: 'blue', fontSize: '10px'}}>
                Mostra dettagli
            </Button>
            
           
            
        </div>
    )
}