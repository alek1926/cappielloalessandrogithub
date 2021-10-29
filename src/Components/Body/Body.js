import * as React from "react";
import { TotaleRepos } from "../TotaleRepos/TotaleRepos";
import { Paginazione } from "../Paginazione/Paginazione";
import { TabellaSuperiore } from "../Tabella/TabellaSuperiore";
import { Form } from "../Form/Form"

export const Body = () => {
  return (
    <div className="Body">
        <TotaleRepos></TotaleRepos>
        <Form></Form>
        <TabellaSuperiore></TabellaSuperiore>
        <Paginazione></Paginazione>
      {" "}
    </div>
  );
};