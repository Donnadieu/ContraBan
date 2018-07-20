import {Router} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker'
import history from './history'
import App from './containers/App'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/lib/integration/react'

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate persistor={persistor}>
      <Router history = {history}>
        <App/>
      </Router>
    </PersistGate>
  </Provider>,
   document.getElementById('root')
 )
registerServiceWorker()
