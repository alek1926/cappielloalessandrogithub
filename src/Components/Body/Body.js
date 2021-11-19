import * as React from "react";
import { TotaleRepos } from "../TotaleRepos/TotaleRepos";
import { TabellaSuperiore } from "../Tabella/TabellaSuperiore";
import { Form } from "../Form/Form";
import { listRepos } from "../../api/repos.js"
import { useState } from "react";
import { MenuClassi } from "../MenuClassi/MenuClassi";

export const Body = () => {
  const [repos, setRepos] = useState(listRepos());
  React.useEffect(() => {
    const populateRepos = async () => {
        setRepos(await listRepos());
    };
    populateRepos();
}, [])


  return (
    <div className="Body">
      <div className="ParteSuperioreBody">
        <TotaleRepos totRepos={repos}></TotaleRepos>
        <MenuClassi></MenuClassi>
        <Form></Form>
        </div>

        <TabellaSuperiore></TabellaSuperiore>
      {" "}
    </div>
  );
};