import { Action } from 'redux';
import { INITIAL_STATE } from './constants';
import { StoreType } from './types';

const rootReducer = (state : StoreType, action: Action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    default:
      return state;
  }
}

export default rootReducer;
