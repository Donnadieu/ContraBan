import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

const reducers = {
  form: formReducer
}

const reducer = combineReducers(reducers)

const middleware = [thunk];

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
)
