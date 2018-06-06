import{
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer';
import {reducer as formReducer} from 'redux-form';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contractReducer from './reducers/contractReducer';


const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['form']
}

const reducers = combineReducers({
  allContracts: contractReducer,
  currentUser: userReducer,
  form: formReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const middleware = [thunk]

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
export const persistor = persistStore(store);
