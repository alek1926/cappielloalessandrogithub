import './App.css';
import { Navbar } from "./Components/Navbar/Navbar"
import { Body } from "./Components/Body/Body" 
import { Footer } from "./Components/Footer/Footer"
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from "react";
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';

function App() {
  const [toggleDark, setToggleDark] = useState(false);
  const myTheme = createTheme({
    palette: {
      mode: toggleDark ? 'dark' : 'light',
    },
  });
   const handleModeChange = () => {
    setToggleDark(!toggleDark);
  };
  return (
    <ThemeProvider theme={myTheme}>
    <Paper>
    <div className="App">
    <div>Tema scuro:<Switch
    checked={toggleDark}
    onChange={handleModeChange}
    name="toggleDark"
    color="default" />
    </div>
      <Navbar></Navbar>
        <Body></Body>
        <Footer></Footer>
    </div>
    </Paper>
    </ThemeProvider>
    
  );
}

export default App;
