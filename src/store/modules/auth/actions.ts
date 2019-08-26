import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import Api, {
  setAuth,
  deleteAuth,
  POST_AUTH_PATH,
  POST_REMIND_PASSWORD_PATH,
  POST_NEW_PASSWORD_PATH,
} from '../../../utils/api';

import {
  CredentialsType,
  NewPasswordType,
} from '../../types';

// Actions Types
////////////////////////////////////////////////////////////

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

export const REMIND_PASSWORD_REQUEST = 'REMIND_PASSWORD';
export const REMIND_PASSWORD_SUCCESS = 'REMIND_PASSWORD_SUCCESS';
export const REMIND_PASSWORD_ERROR = 'REMIND_PASSWORD_ERROR';

export const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD';
export const SET_NEW_PASSWORD_SUCCESS = 'SET_NEW_PASSWORD_SUCCESS';
export const SET_NEW_PASSWORD_ERROR = 'SET_NEW_PASSWORD_ERROR';

export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// Action Creators
////////////////////////////////////////////////////////////

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

export const authError : ActionCreator<Action> = (error: string) => {
  return {
    type: AUTH_ERROR,
    error,
  };
};

export const postAuth: ActionCreator<ThunkAction<Promise<Action>, Action, void, any>>
  = (credentials: CredentialsType) => {
    return async (dispatch: Dispatch<Action>): Promise<Action> => {
      dispatch(authRequest());
      try {
        const response = await Api.post(POST_AUTH_PATH, { user: credentials });
        const { token } = response.data.user;
        setAuth(token);
        return dispatch(authSuccess());
      } catch (e) {
        return dispatch(authError(e));
      };
    };
};

export const remindPasswordRequest : ActionCreator<Action> = () => {
  return {
    type: REMIND_PASSWORD_REQUEST,
  };
};

export const remindPasswordSuccess : ActionCreator<Action> = (message: string) => {
  return {
    type: REMIND_PASSWORD_SUCCESS,
    message,
  };
};

export const remindPasswordError : ActionCreator<Action> = (error: string) => {
  return {
    type: REMIND_PASSWORD_ERROR,
    error,
  };
};

export const postRemindPassword: ActionCreator<ThunkAction<Promise<Action>, Action, void, any>>
  = (usermail: string) => {
    return async (dispatch: Dispatch<Action>): Promise<Action> => {
      dispatch(remindPasswordRequest());
      try {
        const response = await Api.post(POST_REMIND_PASSWORD_PATH, { usermail });
        return dispatch(remindPasswordSuccess(response.data.success.message));
      } catch (e) {
        return dispatch(remindPasswordError(e.response.data.error.message));
      };
    };
};

export const setNewPassword : ActionCreator<Action> = () => {
  return {
    type: SET_NEW_PASSWORD,
  };
};

export const setNewPasswordSuccess : ActionCreator<Action> = () => {
  return {
    type: SET_NEW_PASSWORD_SUCCESS,
  };
};

export const setNewPasswordError : ActionCreator<Action> = (error: string) => {
  return {
    type: SET_NEW_PASSWORD_ERROR,
    error,
  };
};

export const postNewPassword: ActionCreator<ThunkAction<Promise<Action>, Action, void, any>>
  = (credentials: NewPasswordType) => {
    return async (dispatch: Dispatch<Action>): Promise<Action> => {
      dispatch(setNewPassword());
      const user = { id: credentials.id, password: credentials.password }
      const { token } = credentials;
      setAuth(token);
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await Api.post(POST_NEW_PASSWORD_PATH, { user });
        return dispatch(setNewPasswordSuccess());
      } catch (e) {
        return dispatch(setNewPasswordError(e));
      };
    };
};

export const clearMessages : ActionCreator<Action> = () => {
  deleteAuth();
  return {
    type: CLEAR_MESSAGES,
  };
};

export const authLogout : ActionCreator<Action> = () => {
  deleteAuth();
  return {
    type: AUTH_LOGOUT,
  };
};
