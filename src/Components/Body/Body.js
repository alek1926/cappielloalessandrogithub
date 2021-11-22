import React, { useState, useEffect } from 'react';
import { TotaleRepos } from "../TotaleRepos/TotaleRepos";
import { TabellaSuperiore } from "../Tabella/TabellaSuperiore";
import { Form } from "../Form/Form";
import { listRepos } from "../../api/repos.js"
import { MenuClassi } from "../MenuClassi/MenuClassi";

export const Body = () => {
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const loadData = async () => {
      setLoading(true);
      const res = await listRepos();
      if (res.data) setRepos(res.data.results);
      setLoading(false);
  }
  useEffect(() => {
      loadData();
  }, []);
  const handleClick = () => {
      loadData();
  }

  return (
    <div className="Body">
      <div className="ParteSuperioreBody">
        <TotaleRepos repos={repos}></TotaleRepos>
        <button className="UpdateRepos" onClick={() => handleClick()}>Aggiorna repos</button>
        <MenuClassi></MenuClassi>
        <Form></Form>
        </div>

        <TabellaSuperiore repos={repos} loading={loading} ></TabellaSuperiore>
      {" "}
    </div>
  );
};