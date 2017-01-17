import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Main, Home } from '../components'
import { AlbumContainer } from '../containers'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={Home} />
      <Route path="albums" component={AlbumContainer} />
    </Route>
  </Router>
)

export default routes
