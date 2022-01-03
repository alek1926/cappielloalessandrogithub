import * as React from "react";
export const TotaleRepos = ( props ) => {
  

  return (
    <div className="TotaleRepos">
      Totale Repos: {props.repos ? props.repos.length : 'Loading'}
    </div>
  );
};