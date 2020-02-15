import React from "react";
import logo from "./logo.svg";
import Title from "./Components/Title";
import "./App.css";
import Scoreboard from "./Components/Scoreboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {}
        <body>
          <Title />
          <Scoreboard />
        </body>
      </header>
    </div>
  );
}

export default App;
