import * as React from "react";
import { TotaleRepos } from "../TotaleRepos/TotaleRepos";
import { Paginazione } from "../Paginazione/Paginazione";

export const Body = () => {
  return (
    <div className="Body">
        <TotaleRepos></TotaleRepos>
        <Paginazione></Paginazione>
      {" "}
    </div>
  );
};