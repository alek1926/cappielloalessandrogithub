import * as React from "react";
import CircularProgress from '@mui/material/CircularProgress';

export const TotaleRepos = ( props ) => {

  return (
    <div className="TotaleRepos">
      Totale Repos: {props.loading ? <CircularProgress size={20}/> : props.repos && props.repos.length}
    </div>
  );
};