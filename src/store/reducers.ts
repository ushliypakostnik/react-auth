import { Action } from 'redux';

import { INITIAL_STATE } from './constants';
import { StoreType } from './types';
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
} from './actions';

const rootReducer = (state : StoreType, action: Action & any) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case AUTH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case AUTH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuth: true,
      });
    case AUTH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case AUTH_LOGOUT:
      return Object.assign({}, state, {
        isFetching: false,
        isAuth: false,
      });
    default:
      return state;
  }
}

export default rootReducer;
