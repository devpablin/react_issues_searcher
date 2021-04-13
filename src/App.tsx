import React from "react";
import logo from "./logo.svg";
import "./App.css";
import IssuesList from "./components/IssuesList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Issues Finder</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <IssuesList />
      </header>
    </div>
  );
}

export default App;
