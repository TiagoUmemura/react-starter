import React from 'react'
import { useSelector } from 'react-redux'

import { Route } from 'react-router-dom'
import Header from '../components/header'

export default function RouteWrapper ({
  component: Component,
  ...rest
}) {
  const isLogged = useSelector(state => state.auth.isLogged);
//   const Layout = signed ? DefaultLayout : AuthLayout
//TODO: Adicionar redirect caso nao esteja logado
  return (
    <Route
      {...rest}
      render={props => (
        <>
            {isLogged && <Header/>}
            <Component {...props} />
        </>
      )}
    />
  )
}
