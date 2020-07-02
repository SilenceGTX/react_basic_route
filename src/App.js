import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import ChatBoard from './components/ChatBoard/ChatBoard';
import Home from './components/Home';

function App() {
  return (
    
      <BrowserRouter>
        <div>
          <Route path={'/chat'} component={ChatBoard} />
          <Route exact path={'/'} component={Home} /> {/*必须要有exact，否则新页面内容会接着旧页面显示*/}
        </div>
      </BrowserRouter>
  );
}

export default App;