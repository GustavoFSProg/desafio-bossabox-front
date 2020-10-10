import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from '../src/pages/Home'
import Userslist from '../src/pages/UsersList'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/usersList" component={Userslist} />
      </Switch>
    </BrowserRouter>
  )
}
