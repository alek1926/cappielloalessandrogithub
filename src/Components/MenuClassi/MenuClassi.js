import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {popolaClassi} from './popolaClassi';

export const MenuClassi = () => {
    const [classe, setClasse] = useState(popolaClassi());
const classi = [
    "FULLSTACK 1° ANNO", "FULLSTACK 2° ANNO",
    "CYBERSEC 1° ANNO", "CYBERSEC 2° ANNO",
    "BIGDATA 1° ANNO", "BIGDATA 2° ANNO",
    "MARKETING 1° ANNO", "MARKETING 2° ANNO"]
    return (
        <div className="MenuClassi">
               <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={classi}
                renderInput={(params) => <TextField {...params} label="Classe" />}
            />
        </div>
    );
}