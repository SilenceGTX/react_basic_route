import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Navi from './components/Navi';
import Home from './components/Home';
import Overview from './components/Overview';
import Chapters from './components/Chapters';
import Chap from './components/Chap';

function App() {
  return (
    <div className="App">
      <Router>
        <Navi/>
        <Switch> {/*使用Switch的话，一旦匹配到一条就不再向下匹配*/}
          <Route exact path='/' component={ Home }/> {/*使用exact的话，就必须要完全匹配'/'才行*/}
          <Route path='/overview' component={ Overview }/>
          <Route exact path='/chapters' component={ Chapters }/>
          <Route path='/chapters/:chap' component={ Chap }/>
          <Redirect from='/*' to='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
