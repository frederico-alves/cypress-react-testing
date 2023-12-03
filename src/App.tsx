import React from 'react';
import { ReactComponent as TestingSVG } from './logo_2.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={testing} className="App-logo" alt="logo" /> */}
        <TestingSVG />
        <h1 data-testid="testing-app-title">Cypress Testing</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.cypress.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More about Cypress Testing
        </a>
      </header>
    </div>
  );
}

export default App;
