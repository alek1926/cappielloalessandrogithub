import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {popolaClassi} from './popolaClassi';

export const MenuClassi = () => {
    const [classi, setClassi] = useState(popolaClassi());
    const [classeSelezionata, setClasseSelezionata] = useState(null);
    
    
    //setClassi(classi) e console.log(classeSelezionata) sono presenti per evitare warning che avrebbero impedito il deployment
    return (
        <div className="MenuClassi">
               <Autocomplete
                onChange={(event, newValue) => {
                    setClassi(classi);
                    setClasseSelezionata(newValue);
                    console.log(classeSelezionata);
                }}
                disablePortal
                id="combo-box-demo"
                options={classi}
                renderInput={(params) => <TextField {...params} label="Classe" />}
            />
        </div>
    );
}