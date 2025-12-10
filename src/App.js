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
      </header>
      <main className="App-container">
         <WeatherSearchEngine />
      </main>
      <footer>
        <span>This project was coded by Jade Coster and is open-sourced on <a href="https://github.com/Vadia-Jade/weather-react" target="_blank" rel="noreferrer">GitHub</a>and hosted on <a href="https://charming-gaufre-ea49f0.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
