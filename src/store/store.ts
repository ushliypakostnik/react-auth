import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory as createHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { INITIAL_STATE } from './constants';
import { StoreType } from './types';
import rootReducer from './reducers';

const middlewares : any[] = [];
middlewares.push(thunkMiddleware)

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger();

  middlewares.push(loggerMiddleware);
}

const localStorageMiddleware = ({getState} : any) => {
  return (next : any) => (action: any) => {
    const result = next(action);
    localStorage.setItem('localState', JSON.stringify(
        getState().rootReducer.collection
    ));
    return result;
  };
};
middlewares.push(localStorageMiddleware);

const reHydrateStore = (state: StoreType) => {
  if (localStorage.getItem('localState') !== null) {
    // const localCollection = JSON.parse(localStorage.getItem('localCollection') || '{}');
    const _state = Object.assign({}, state, {
      rootReducer: {
        ...state.rootReducer,
      },
    });
    return _state;
  }
  return state;
};

export const history = createHistory();
middlewares.push(routerMiddleware(history));

function configureStore(state : StoreType) {
  return createStore(
    combineReducers({
      rootReducer,
      router: connectRouter(history),
    } as any),
    reHydrateStore(state),
    applyMiddleware(...middlewares)
  );
}

const store = configureStore(INITIAL_STATE);

export default store;
