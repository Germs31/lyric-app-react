import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Landing from './components/Landing'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App