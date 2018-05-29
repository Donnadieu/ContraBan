import{
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'

import thunk from 'redux-thunk'

const middleware = [thunk]

export default createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
