import { Action } from 'redux';
import { INITIAL_STATE } from './constants';
import { StoreType } from './types';
import { AUTH_ERROR } from './actions';

const rootReducer = (state : StoreType, action: Action & any) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case AUTH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default rootReducer;
