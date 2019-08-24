import { combineReducers } from 'redux';

import { Action } from 'redux';

import { INITIAL_STATE, MESSAGES } from './constants';
import { StoreType } from './types';
import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  REMIND_PASSWORD_REQUEST,
  REMIND_PASSWORD_SUCCESS,
  REMIND_PASSWORD_ERROR,
  SET_NEW_PASSWORD,
  SET_NEW_PASSWORD_SUCCESS,
  SET_NEW_PASSWORD_ERROR,
  CLEAR_MESSAGES,
  AUTH_LOGOUT,

  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR,
  SEND_VERIFY_EMAIL,
  SEND_VERIFY_EMAIL_SUCCESS,
  SEND_VERIFY_EMAIL_ERROR,
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
        error: action.error,
      });
     case REMIND_PASSWORD_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case REMIND_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        success: action.message,
      });
    case REMIND_PASSWORD_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    case SET_NEW_PASSWORD:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case SET_NEW_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuth: true,
      });
    case SET_NEW_PASSWORD_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    case CLEAR_MESSAGES:
      return Object.assign({}, state, {
        success: '',
        error: '',
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
      let success = '';
      if (!action.profile.isVerify) {
        success = MESSAGES.verify_account.message;
      }
      return Object.assign({}, state, {
        isFetching: false,
        profile: {
          userid: action.profile.id,
          usermail: action.profile.usermail,
          username: action.profile.username,
          isVerify: action.profile.isVerify,
        },
        success,
      });
    case USER_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case SEND_VERIFY_EMAIL:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case SEND_VERIFY_EMAIL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        success: MESSAGES.resend_verify_email.message,
      });
    case SEND_VERIFY_EMAIL_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case AUTH_LOGOUT:
      return Object.assign({}, state, {
        profile: {},
        success: '',
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
