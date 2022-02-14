import './App.css';
import { Navbar } from "./layout/Navbar/Navbar"
import { Footer } from "./layout/Footer/Footer"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import { Outlet } from "react-router-dom";
import {userMock} from "./api/user.js";
import { userContext } from "./context/userContext";
import { useNavigate } from "react-router-dom"



function App() {
  const [user, setUser] = useState(userMock);
  const [toggleDark, setToggleDark] = useState(false);
  let navigate = useNavigate();
  const myTheme = createTheme({
    palette: {
      mode: toggleDark ? 'dark' : 'light',
    },
  });
   const handleModeChange = () => {
    setToggleDark(!toggleDark);
  };
  return (
    <userContext.Provider value={user.session}>
     {user.session ?
        <ThemeProvider theme={myTheme}>
        <Paper>
        <div className="App">
      
          <Navbar toggleDark={toggleDark} handleThemeChange={handleModeChange} ></Navbar>
          <Outlet />
          <Footer></Footer>
        </div>
        </Paper>
        </ThemeProvider> : navigate('login')}
    </userContext.Provider>
  );
}

export default App;
