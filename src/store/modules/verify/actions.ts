import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import Api, { POST_VERIFY } from '../../../utils/api';

// Actions Types
////////////////////////////////////////////////////////////

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_REQUEST_RESULT = 'VERIFY_REQUEST_RESULT';

// Action Creators
////////////////////////////////////////////////////////////

export const verifyRequest : ActionCreator<Action> = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

export const verifyRequestResult : ActionCreator<Action> = (result: string) => {
  return {
    type: VERIFY_REQUEST_RESULT,
    result,
  };
};

export const postVerify : ActionCreator<ThunkAction<Promise<Action>, Action, void, any>>
  = (id : string) => {
    return async (dispatch : Dispatch<Action>) : Promise<Action> => {
      dispatch(verifyRequest());
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await Api.post(POST_VERIFY, { id });
        return dispatch(verifyRequestResult(response.data.message));
      } catch (e) {
        return dispatch(verifyRequestResult(e.response.data.message));
      };
    };
};
