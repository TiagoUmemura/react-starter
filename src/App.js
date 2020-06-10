import React from 'react';
import { Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { Store, Persistor } from './store';
import GlobalStyle from './global-style'
import RouteWrapper from './routes/route'

import Login from './pages/login';
import Home from './pages/home';
import history from './history/history'

function App() {
  return (
    <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <Router history={history}>
            <RouteWrapper path="/" exact={true} component={Login} />
            <RouteWrapper path="/home" exact={true} component={Home} />
            <GlobalStyle />
          </Router>
        </PersistGate>
    </Provider>
  );
}

export default App;
