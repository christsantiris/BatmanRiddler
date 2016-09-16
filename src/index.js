import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {
  App,
  Start,
  Game
} from './components'

import './styles/screen.sass'

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Start} />
      <Route path='/game' component={Game} />
    </Route>
  </Router>
), document.getElementById('root'))
