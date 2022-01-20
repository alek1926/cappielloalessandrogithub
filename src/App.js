import './App.css';
import { Navbar } from "./layout/Navbar/Navbar"
import { Footer } from "./layout/Footer/Footer"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import { Outlet } from "react-router-dom";


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
  
      <Navbar toggleDark={toggleDark} handleThemeChange={handleModeChange} ></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
    </Paper>
    </ThemeProvider>
    
  );
}

export default App;
