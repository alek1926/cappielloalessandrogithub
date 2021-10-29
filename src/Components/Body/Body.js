import * as React from "react";
import { TotaleRepos } from "../TotaleRepos/TotaleRepos";
import { Paginazione } from "../Paginazione/Paginazione";
import { Tabella } from "../Tabella/Tabella";

export const Body = () => {
  return (
    <div className="Body">
        <TotaleRepos></TotaleRepos>
        <Tabella></Tabella>
        <Paginazione></Paginazione>
      {" "}
    </div>
  );
};