import React, { useState, useEffect } from "react";
import { TotaleRepos } from "../Components/TotaleRepos/TotaleRepos";
import { TabellaSuperiore } from "../Components/Tabella/TabellaSuperiore";
import { Form } from "../Components/Form/Form";
import { MenuClassi } from "../Components/MenuClassi/MenuClassi";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useRepos } from "../hooks/useRepos";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

export default function Repos () {
  const { repos, loading, loadData, isError } = useRepos();
  const [keywords, setKeywords] = useState("");
  let navigate = useNavigate();

  const {session, navigateRoute} = useAuth();

  const newKeywords = (_keywords) => {
    setKeywords(_keywords);
  };

  const handleClick = () => {
    loadData();
  };

  useEffect(() => {
    const isAuth = () => {
        if (session !== true) {
            navigate(navigateRoute);
        }
    }
    isAuth();
}, [session,navigateRoute]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="Body">
      <div className="ParteSuperioreBody">
        <Grid container direction="row">
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <TotaleRepos loading={loading} repos={repos}></TotaleRepos>
          </Grid>
          <Grid item lg={1} md={1} sm={4.18} xs={3}></Grid>
          <Grid item lg={3} md={2} sm={6} xs={6}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#1565C0", color: "#FAFAFA" }}
              size="large"
              className="AggiornaRepos"
              id="aggiornaRepos"
              onClick={() => handleClick()}
            >
              Aggiorna repos
            </Button>
          </Grid>
          <Grid item lg={1} md={1.5} sm={4.18} xs={3}></Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <MenuClassi></MenuClassi>
          </Grid>
          <Grid item lg={1} md={1.5} sm={0} xs={0}></Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <Form newKeywords={newKeywords}></Form>
          </Grid>
        </Grid>
      </div>
      {!isError && (
        <TabellaSuperiore
          repos={repos}
          keywords={keywords}
          loading={loading}
        ></TabellaSuperiore>
      )}
      {isError && <div>Errore</div>}{" "}
    </div>
    
  );
};
