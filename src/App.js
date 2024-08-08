import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dublin" />
        <footer>
          This project was coded by Jessica Gardiner and is{" "}
          <a
            href="https://github.com/JesGardiner/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
