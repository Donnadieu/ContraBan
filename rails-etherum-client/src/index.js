import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
  );
registerServiceWorker();

// var store = {
//   currentUser: {
//     id: 'id',
//     email: 'email',
//     auth_token: 'token',
//     has_login_credentials: false
//     contracts: []
//   }
// }
