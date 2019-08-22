import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import Api from '../utils/api';

import {
  credentialsType,
  errorType,
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

export const authSuccess : ActionCreator<Action> = () => {
  return {
    type: AUTH_SUCCESS,
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
      console.log(credentials);
      try {
        const response = await Api.post(`/api/user/login`, { user: credentials });
        const token = response.data.user.token;
        console.log(token);
        return dispatch(authSuccess());
      } catch (e) {
        console.log(e);
        return dispatch(authError(e));
      };
    };
};
