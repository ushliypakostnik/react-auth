import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import Api, {
  GET_USER_PATH,
  POST_VERIFY_EMAIL_PATH,
} from '../../../utils/api';

import { CredentialsType } from '../../types';

// Actions Types
////////////////////////////////////////////////////////////

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export const SEND_VERIFY_EMAIL = 'SEND_VERIFY_EMAIL';
export const SEND_VERIFY_EMAIL_SUCCESS = 'SEND_VERIFY_EMAIL_SUCCESS';
export const SEND_VERIFY_EMAIL_ERROR = 'SEND_VERIFY_EMAIL_ERROR';

// Action Creators
////////////////////////////////////////////////////////////

export const userRequest : ActionCreator<Action> = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess : ActionCreator<Action> = (profile: string) => {
  return {
    type: USER_SUCCESS,
    profile,
  };
};

export const userError : ActionCreator<Action> = (error: string) => {
  return {
    type: USER_ERROR,
    error,
  };
};

export const getUser: ActionCreator<ThunkAction<Promise<Action>, Action, void, any>>
  = (credentials: CredentialsType) => {
    return async (dispatch: Dispatch<Action>): Promise<Action> => {
      dispatch(userRequest());
      try {
        const response = await Api.get(GET_USER_PATH);
        return dispatch(userSuccess(response.data.user));
      } catch (e) {
        return dispatch(userError(e));
      };
    };
};

export const sendVerifyEmail : ActionCreator<Action> = () => {
  return {
    type: SEND_VERIFY_EMAIL,
  };
};

export const sendVerifyEmailSuccess : ActionCreator<Action> = () => {
  return {
    type: SEND_VERIFY_EMAIL_SUCCESS,
  };
};

export const sendVerifyEmailError : ActionCreator<Action> = (error: string) => {
  return {
    type: SEND_VERIFY_EMAIL_ERROR,
    error,
  };
};

export const postVerifyEmail: ActionCreator<ThunkAction<Promise<Action>, Action, void, any>>
  = (usermail: string) => {
    return async (dispatch: Dispatch<Action>): Promise<Action> => {
      dispatch(sendVerifyEmail());
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await Api.post(POST_VERIFY_EMAIL_PATH, { usermail });
        return dispatch(sendVerifyEmailSuccess());
      } catch (e) {
        return dispatch(sendVerifyEmailError(e));
      };
    };
};

