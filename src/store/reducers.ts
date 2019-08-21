import { INITIAL_STATE } from './constants';

import {
  Store,
  TEST_ACTION_TYPE,
  testActionType
} from './types';

const rootReducer = (state : Store, action: testActionType) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case TEST_ACTION_TYPE:
      return Object.assign({}, state, {
      });
    default:
      return state;
  }
}

export default rootReducer;
