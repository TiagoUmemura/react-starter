import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import './env';

import { Provider } from 'react-redux';
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from './assets/styles/global'

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        {children}  
      </PersistGate>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

  // re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render };
