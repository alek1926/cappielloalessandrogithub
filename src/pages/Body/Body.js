import React, { useState, useEffect } from 'react';
import { TotaleRepos } from "../../Components/TotaleRepos/TotaleRepos";
import { TabellaSuperiore } from "../../Components/Tabella/TabellaSuperiore";
import { Form } from "../../Components/Form/Form";
import { listRepos } from "../../api/repos.js"
import { MenuClassi } from "../../Components/MenuClassi/MenuClassi";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export const Body = () => {
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState('');

  const newKeywords = (_keywords) => {

        setKeywords(_keywords);

    };
      const loadData = async () => {
      setLoading(true);
      const res = await listRepos();
      if (res.data) setRepos(res.data);
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
        <Grid container direction="row">
          <Grid item lg={2} md={2} sm={12} xs={12}>
        <TotaleRepos loading={loading} repos={repos}></TotaleRepos>
        </Grid>
        <Grid item lg={1} md={1.5} sm={4.5} xs={3}></Grid>
        <Grid item lg={3} md={2} sm={6} xs={6}>
        <Button variant="contained" style={{backgroundColor: '#1565C0', color: '#FAFAFA'}} size="large" className="AggiornaRepos" id="aggiornaRepos" onClick={() => handleClick()}>Aggiorna repos</Button>
        </Grid>
        <Grid item lg={2} md={2} sm={12} xs={12}>
        <MenuClassi></MenuClassi>
        </Grid>
        <Grid item lg={1} md={1.5} sm={0} xs={0}></Grid>
        <Grid item lg={3} md={2} sm={12} xs={12}>
        <Form newKeywords={newKeywords}></Form>
        </Grid>
        </Grid>
        </div>

       <TabellaSuperiore repos={repos} keywords={keywords} loading={loading} ></TabellaSuperiore>
      {" "}
    </div>
  );
};