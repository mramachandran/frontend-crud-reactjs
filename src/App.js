import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserTable from './UserTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to view results.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable />
        </div>
      </header>
    </div>
  );
}

export default App;
