import { Action } from 'redux';

import { INITIAL_STATE } from '../../constants';
import { StoreType } from '../../types';

import {
  AUTH_REQUEST,
  AUTH_FACEBOOK_REQUEST,
  AUTH_VKONTAKTE_REQUEST,
  SET_TOKEN,
  AUTH_SUCCESS,
  AUTH_ERROR,
  REMIND_PASSWORD_REQUEST,
  REMIND_PASSWORD_SUCCESS,
  REMIND_PASSWORD_ERROR,
  SET_NEW_PASSWORD,
  SET_NEW_PASSWORD_RESULT,
  AUTH_LOGOUT,
} from './actions';
import {
  CLEAR_MESSAGES,
} from '../utils/actions';

const auth = (state : StoreType, action: Action & any) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case AUTH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case AUTH_FACEBOOK_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case AUTH_VKONTAKTE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case SET_TOKEN:
      return Object.assign({}, state, {
        isFetching: false,
        isAuth: true,
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
    case SET_NEW_PASSWORD_RESULT:
      return Object.assign({}, state, {
        isFetching: false,
        result: action.result,
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

export default auth;
