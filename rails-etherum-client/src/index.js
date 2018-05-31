import {
  BrowserRouter as Router,
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
import store from './store.js';
import {getRoutes} from './containers/getRoutes'

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      { getRoutes(store) }
    </Router>
  </Provider>,
   document.getElementById('root')
 )
registerServiceWorker()
