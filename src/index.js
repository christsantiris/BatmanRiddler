import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {
  App,
  Start,
  Board,
  Game,
  About
} from './components'

import './styles/screen.sass'

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Start} />
      <Route path='/game/:difficulty' component={Board} />
      <Route path='/game/:difficulty/:index' component={Game} />
      <Route path='/about' component={About} />
    </Route>
  </Router>
), document.getElementById('root'))
