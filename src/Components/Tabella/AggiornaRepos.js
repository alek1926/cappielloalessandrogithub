import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { axiosGet } from '../../api/axiosGet.js';

export const AggiornaRepos = () => {
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        axiosGet();
      }, [clicked]);

      function handleClick() {
        setClicked(!clicked);
    }

    return (
        <div className="AggiornaRepos">
        <button onClick={handleClick}>
                Aggiorna Repos
            </button>
            
        </div>
    )
}