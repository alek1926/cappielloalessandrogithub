import React, { useState } from 'react';
import './App.css';
import { Navbar } from "./Components/Navbar/Navbar"
import { Body } from "./Components/Body/Body" 
import { listRepos } from './api/repos';

function App() {

  const [repos, setRepos] = useState(listRepos());
//  console.log(repos);
//  console.log(fetchGit());
  return (
    <div className="App">
      
      <header className="App-header">
      <Navbar></Navbar>
        <Body></Body>
        
      </header>
    </div>
  );
}

export default App;
