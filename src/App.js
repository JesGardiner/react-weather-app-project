import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by Jessica Gardiner and is{" "}
        <a
          href="https://github.com/JesGardiner/react-weather-app"
          target= "_blank" >
          {" "}
          open-sourced on GitHub{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
