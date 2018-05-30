import{
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
  currentUser: userReducer,
  form: formReducer
})

const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
