import * as React from "react";
import { getReposOf } from "../../api/getReposOf.js"
export const TotaleRepos = ( props ) => {
  let lunghezzaRepos = 0;
  props.totRepos.forEach(e => lunghezzaRepos += e["repos"].length);
 
  return (
    <div className="TotaleRepos">
      Totale Repos: {lunghezzaRepos}
    </div>
  );
};