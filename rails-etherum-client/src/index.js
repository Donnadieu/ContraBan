import {Router} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import './index.css'
import registerServiceWorker from './registerServiceWorker'
import history from './history'
import App from './components/App'
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.render(
  <Provider store={ store }>
    <Router history = {history}>
      <PersistGate persistor={persistor}>
        <App/>
      </PersistGate>
    </Router>
  </Provider>,
   document.getElementById('root')
 )
registerServiceWorker()
