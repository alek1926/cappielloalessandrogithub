import * as React from "react";
import Button from '@mui/material/Button';

export const Menu = () => {
  return (
    <div className="Menu">
        <Button variant="outlined" style={{backgroundColor: 'orangered', color: '#FAFAFA'}} size="small" id="menuButton">Visualizza Repos</Button>
        <Button variant="outlined" style={{backgroundColor: 'orangered', color: '#FAFAFA'}} size="small"id="menuButton">Nuovo Utente</Button>
      {" "}
    </div>
  );
};