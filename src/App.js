import React from 'react';
import logo from './logo.svg';
import './App.css';
import pavlo1 from './img/pavlo1.jpg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey, there! I'm Pavlo!
          <p>
            <img src={pavlo1} className="img" alt="Pavlo-image" />
          </p>
          How's it going?
        </p>
        <p>
          Keep calm, and learn React!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
