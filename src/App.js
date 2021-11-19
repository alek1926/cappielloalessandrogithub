import React, { useState } from 'react';
import './App.css';
import { Navbar } from "./Components/Navbar/Navbar"
import { Body } from "./Components/Body/Body" 
import { listRepos } from './api/repos';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
        <Body></Body>
        
    </div>
  );
}

export default App;
