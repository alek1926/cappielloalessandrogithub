import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Logout from "./pages/Logout";
import Classes from "./pages/Classes";
import Notfound from "./pages/Notfound";
import Repos from "./pages/Repos"; 
import {DettagliRepos} from "./pages/DettagliRepos";
import { Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="users" element={<Users />} />
          <Route path="classes" element={<Classes />} />
          <Route path="repos/*" element={<Repos />} />
          <Route path="repos/:repoName" element={<DettagliRepos />} />
        </Route>
        <Route path="logout" element={<Logout />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
