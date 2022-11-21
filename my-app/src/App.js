import React from 'react';
import './App.css';

import Xml from './Xml';
import Csvp from './Csvp';
import Json from './Json';
import Header from './Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='Parentbox'>

        <Header />
        <div className='Content'>
          <h1>Tugas UTS </h1>
          <Switch>

            <Route path="/xml" component={Xml} />
            <Route path="/csvp" component={Csvp} />
            <Route path="/json" component={Json} />

          </Switch>
        </div>
      </div>
    </Router>

  );
}



export default App;
