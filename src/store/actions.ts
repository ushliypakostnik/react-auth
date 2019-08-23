import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import Cookies from "js-cookie";

import { COOKIES, LOCAL } from './constants';

import Api, {
  setAuth,
  deleteAuth,
  POST_AUTH_PATH,
  GET_USER_PATH,
} from '../utils/api';

import {
  credentialsType,
  errorType,
} from './types';

// Actions Types
////////////////////////////////////////////////////////////

// Auth

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// User

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export const SEND_VERIFY_EMAIL = 'SEND_VERIFY_EMAIL';

// Action Creators
////////////////////////////////////////////////////////////

// Auth

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
  deleteAuth();
  localStorage.removeItem(LOCAL.PROFILE);
  return {
    type: AUTH_LOGOUT,
  };
};

// Async Redux-Thunk Action
export const postAuth: ActionCreator<ThunkAction<Promise<Action>, Action, void, any>>
  = (credentials: credentialsType) => {
    return async (dispatch: Dispatch<Action>): Promise<Action> => {
      dispatch(authRequest());
      try {
        const response = await Api.post(POST_AUTH_PATH, { user: credentials });
        const token = response.data.user.token;
        setAuth(token);
        return dispatch(authSuccess());
      } catch (e) {
        console.log(e);
        return dispatch(authError(e));
      };
    };
};

// User

export const userRequest : ActionCreator<Action> = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess : ActionCreator<Action> = (profile) => {
  return {
    type: USER_SUCCESS,
    profile,
  };
};

export const userError : ActionCreator<Action> = (error: errorType) => {
  return {
    type: USER_ERROR,
    error,
  };
};

// Async Redux-Thunk Action
export const getUser: ActionCreator<ThunkAction<Promise<Action>, Action, void, any>>
  = (credentials: credentialsType) => {
    return async (dispatch: Dispatch<Action>): Promise<Action> => {
      dispatch(userRequest());
      const token = Cookies.get(COOKIES.TOKEN.name);
      try {
        const response = await Api.get(GET_USER_PATH, { headers: { 'Authorization': `Token ${token}` }});
        return dispatch(userSuccess(response.data.user));
      } catch (e) {
        console.log(e);
        return dispatch(userError(e));
      };
    };
};

export const sendVerifyEmail : ActionCreator<Action> = () => {
  return {
    type: SEND_VERIFY_EMAIL,
  };
};

