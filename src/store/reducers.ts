import { combineReducers } from 'redux';

import { Action } from 'redux';

import { INITIAL_STATE } from './constants';
import { StoreType } from './types';
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR,
} from './actions';

const auth = (state : StoreType, action: Action & any) => {
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
        isAuth: false,
        error: action.error
      });
    case AUTH_LOGOUT:
      return Object.assign({}, state, {
        isFetching: false,
        isAuth: false,
      });
    default:
      return state;
  };
};

const user = (state : StoreType, action: Action & any) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        profile: {
          userid: action.profile.id,
          usermail: action.profile.usermail,
          username: action.profile.username,
          isVerify: action.profile.isVerify,
        },
      });
    case USER_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  };
};

const rootReducer = combineReducers({
  auth,
  user,
});

export default rootReducer;
