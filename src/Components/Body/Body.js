import * as React from "react";
import { TotaleRepos } from "../TotaleRepos/TotaleRepos";
import { Paginazione } from "../Paginazione/Paginazione";
import { Tabella } from "../Tabella/Tabella";
import { Form } from "../Form/Form"

export const Body = () => {
  return (
    <div className="Body">
        <TotaleRepos></TotaleRepos>
        <Form></Form>
        <Tabella></Tabella>
        <Paginazione></Paginazione>
      {" "}
    </div>
  );
};