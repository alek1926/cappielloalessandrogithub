import * as React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Footer = (  ) => {

  return (
    <>
      <Box className="Footer" sx={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', m: 1, width: "100%" }}>
      <Grid item xs={3}>
      <a href="https://cappielloalessandrogithub.vercel.app/"><h6>Supporto</h6></a>
      </Grid>
      <Grid item xs={3}>
      <a href="https://cappielloalessandrogithub.vercel.app/"><h6>Contatti</h6></a>
      </Grid>
      <Grid item xs={3}>
      <a href="https://cappielloalessandrogithub.vercel.app/"><h6>Docs</h6></a>
      </Grid>
      <Grid item xs={3}>
      <a href="https://cappielloalessandrogithub.vercel.app/"><h6>About Us</h6></a>
      </Grid>
      </Box>
    <Grid item xs={12} sx={{fontSize: "12px"}}>
    <p>© 2022 Copyright: Alessandro Cappiello</p>
    </Grid>
    </>
  );
};