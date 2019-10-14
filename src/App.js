import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import {Provider} from './context'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Provider>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route extact path ="/" render={()=> <Index/>}/>
          </Switch>
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App