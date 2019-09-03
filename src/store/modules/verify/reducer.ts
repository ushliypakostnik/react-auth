import { Action } from 'redux';

import { INITIAL_STATE } from '../../constants';
import { StoreType } from '../../types';

import {
  VERIFY_REQUEST,
  VERIFY_REQUEST_RESULT,
} from './actions';

const verify = (state : StoreType, action: Action & any) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case VERIFY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case VERIFY_REQUEST_RESULT:
      return Object.assign({}, state, {
        isFetching: false,
        result: action.result,
      });
    default:
      return state;
  };
};

export default verify;
