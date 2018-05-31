import {
  Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import './index.css'
import registerServiceWorker from './registerServiceWorker'
import history from './history'
import App from './containers/App'
import { persistor, store } from './store';

ReactDOM.render(
  <Provider store={ store }>
    <Router history = {history}>
      <App store={store} persistor={persistor} />
    </Router>
  </Provider>,
   document.getElementById('root')
 )
registerServiceWorker()
