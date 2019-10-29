import React from 'react';
import { Router, Route } from 'react-router-dom'

import Login from './pages/login';
import Home from './pages/home';
import history from './history/history'

function App() {
  return (
    <Router history={history}>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" exact={true} component={Home} />
  </Router>
  );
}

export default App;
