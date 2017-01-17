import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import photosReducer from './redux/modules/photos'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger()
const store = createStore(photosReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)
