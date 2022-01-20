import * as React from "react";
import { Logo } from '../../Components/Logo/Logo'
import { Menu } from '../../Components/Menu/Menu'
import Grid from '@mui/material/Grid';
import {SwitchToggle} from '../../Components/Switch/SwitchToggle';
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <div className="Navbar">
      <Grid container direction="row">
          <Grid item lg={4} md={4} xs={12}>
          <Link to="/repos"><Logo></Logo></Link>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
          <SwitchToggle toggleDark={props.toggleDark} handleThemeChange={props.handleThemeChange}></SwitchToggle>
            </Grid>
          <Grid item lg={4} md={4} xs={12}>
          <Menu></Menu>
          </Grid>
      </Grid>
    </div>
  );
};