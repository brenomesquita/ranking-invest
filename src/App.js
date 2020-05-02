import React from 'react';
import Dashboard from './dashboard/Dashboard';
import './App.css';
import stocks from './dashboard/data'

function App() {
  return (
    <div className="App">
      <Dashboard stocks={stocks}/>
    </div>
  );
}

export default App;
