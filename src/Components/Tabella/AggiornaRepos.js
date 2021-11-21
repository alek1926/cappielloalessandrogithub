import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { axiosGet } from '../../api/axiosGet.js';

export const AggiornaRepos = (props) => {
    const [clicked, setClicked] = useState(0);
    useEffect(() => {
        axiosGet();
      }, [clicked]);

      function handleClick() {
        setClicked(clicked + 1);
    }

    return (
        <div className="AggiornaRepos">
        <button onClick={handleClick}>
                Aggiorna Repos
            </button>
            
        </div>
    )
}