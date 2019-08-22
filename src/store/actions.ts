import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import Api from '../utils/api';

import {
  credentialsType,
  errorType,
  responseType,
} from './types';

// Actions Types

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// Action Creators

export const authRequest : ActionCreator<Action> = () => {
  return {
    type: AUTH_REQUEST,
  };
};

export const authSuccess : ActionCreator<Action> = (response: responseType) => {
  return {
    type: AUTH_SUCCESS,
    response,
  };
};

export const authError : ActionCreator<Action> = (error: errorType) => {
  return {
    type: AUTH_ERROR,
    error,
  };
};

export const authLogout : ActionCreator<Action> = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

// Async Redux-Thunk Action
export const fetchAuth: ActionCreator<ThunkAction<Promise<Action>, Action, void, any>>
  = (credentials: credentialsType) => {
    return async (dispatch: Dispatch<Action>): Promise<Action> => {
      dispatch(authRequest());
      try {
        const responce = await Api.post(`/api/user/login`, { credentials });
        return dispatch(authSuccess(responce));
      } catch (e) {
        return dispatch(authError(e));
      };
    };
};
