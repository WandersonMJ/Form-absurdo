import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid'

import DashBoard from '../pages/DashBoard'
import Form from '../pages/Form'
import NotFound from '../pages/NotFound'

const paths = [
  {
    path: '/',
    component: <DashBoard />
  },
  {
    path: '/form',
    component: <Form />
  },
  {
    path: '*',
    component: <NotFound />
  }
]

export default function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/form">
          <Form />
        </Route>
        {paths.map((item) => (
          <Route key={uuidv4()} exact path={item.path}>
            {item?.component && item?.component}
          </Route>
        ))}
      </Switch>
    </Router>
  )
}
