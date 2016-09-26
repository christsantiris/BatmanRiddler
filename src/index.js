import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import store from './store'
import { Provider } from 'react-redux'

import {
  App,
  Start,
  Board,
  Game
} from './components'

import './styles/screen.sass'

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path='/' component={Start} />
        <Route path='/game/:difficulty' component={Board} />
        <Route path='/game/:difficulty/:index' component={Game} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
