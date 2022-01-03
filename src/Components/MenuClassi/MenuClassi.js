import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const MenuClassi = () => {
    const [classe, setClasse] = React.useState('');
  
    const handleChange = (event) => {
      setClasse(event.target.value);
    };
    return (
        <div className="MenuClassi">
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Classe</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={classe}
            label="Classe"
            onChange={handleChange}
        >
            <MenuItem value={'FSD 1 Anno'}>Fullstack 1 Anno</MenuItem>
            <MenuItem value={'FSD 2 Anno'}>Fullstack 2 Anno</MenuItem>
            <MenuItem value={'Marketing 1 Anno'}>Marketing 1 Anno</MenuItem>
            <MenuItem value={'Marketing 2 Anno'}>Marketing 2 Anno</MenuItem>
        </Select>
        </FormControl>
        </div>
    );
}