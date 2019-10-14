import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route extact path ="/" render={()=> <Index/>}/>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App