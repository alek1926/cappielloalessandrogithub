import * as React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Footer = (  ) => {

  return (
    <>
    <Grid item xs={12}>
      <Box className="Footer" sx={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', m: 1, width: "100%" }}>
      <a href="https://cappielloalessandrogithub.vercel.app/"><h6>Supporto</h6></a>
      <a href="https://cappielloalessandrogithub.vercel.app/"><h6>Contatti</h6></a>
      <a href="https://cappielloalessandrogithub.vercel.app/"><h6>Docs</h6></a>
      <a href="https://cappielloalessandrogithub.vercel.app/"><h6>About us</h6></a>
      </Box>
    </Grid>
    <Grid item xs={12} sx={{fontSize: "12px"}}>
    <p>© 2022 Copyright: Alessandro Cappiello</p>
    </Grid>
    </>
  );
};