import * as React from "react";
import { Logo } from '../../Components/Logo/Logo'
import { Menu } from '../../Components/Menu/Menu'
import Grid from '@mui/material/Grid';


export const Navbar = () => {
  return (
    <div className="Navbar">
      <Grid container direction="row">
          <Grid item lg={3} md={4} xs={12}>
          <Logo></Logo>
          </Grid>
          <Grid item lg={6} md={4} xs={0}>
            </Grid>
          <Grid item lg={3} md={4} xs={12}>
          <Menu></Menu>
          </Grid>
      </Grid>
    </div>
  );
};