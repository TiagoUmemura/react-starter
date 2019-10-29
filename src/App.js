import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/home" exact={true} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
