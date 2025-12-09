import React from "react";
import WeatherSearchEngine from "./WeatherSearchEngine";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
        Weather Search Engine
      </h1>
      <WeatherSearchEngine />
      </header>
    </div>
  );
}

export default App;
