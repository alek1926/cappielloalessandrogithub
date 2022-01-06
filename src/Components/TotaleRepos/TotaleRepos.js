import * as React from "react";
import CircularProgress from '@mui/material/CircularProgress';

export const TotaleRepos = ( props ) => {

  return (
    <div className="TotaleRepos">
      Totale Repos: {props.repos ? props.repos.length : <CircularProgress size={20}/>}
    </div>
  );
};