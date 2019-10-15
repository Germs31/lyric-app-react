import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics'
import {Provider} from './context'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Provider>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path ="/" component={Index}/>
            <Route exact path ="/lyrics/track/:id" component={Lyrics}/>
          </Switch>
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App