import './App.css';
import { Navbar } from "./Components/Navbar/Navbar"
import { Body } from "./Components/Body/Body" 

function App() {
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
