import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Welcome from './Pages/Welcome'
import Main from './Pages/Main/Main'


export default function useRoutes() {
  return (
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route  path='/main' component={Main} />
    </Switch>
  )
}