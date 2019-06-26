import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import userReducer from '../modules/user/UserReducer';
import currenciesReducer from '../modules/currencies/CurrenciesReducer';
import accountReducer from '../modules/account/AccountReducer';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
  stateReconciler: hardSet
};

const allReducers = combineReducers({
  user: userReducer,
  currencies: currenciesReducer,
  account: accountReducer,
  router: connectRouter(history)
});

export const ROOT_REDUCER_ACTION_TYPES = {
  RESET_APP: 'RESET_APP'
};
export const resetApp = () => ({ type: ROOT_REDUCER_ACTION_TYPES.RESET_APP });

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return allReducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(routerMiddleware(history), thunk))
);
export default store;
export const persistor = persistStore(store);
