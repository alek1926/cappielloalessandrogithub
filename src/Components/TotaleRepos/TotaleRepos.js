import * as React from "react";
export const TotaleRepos = ( props ) => {
  
  let lunghezzaRepos = props.totRepos.length;

  return (
    <div className="TotaleRepos">
      Totale Repos: {lunghezzaRepos}
    </div>
  );
};