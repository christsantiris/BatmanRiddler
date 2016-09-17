import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {
  App,
  Start,
  Game,
  Board
} from './components'

import './styles/screen.sass'

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Start} />
      <Route path='/game' component={Game} />
      <Route path='/board' component={Board} />
    </Route>
  </Router>
), document.getElementById('root'))
