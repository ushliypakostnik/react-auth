import { combineReducers } from 'redux';

import auth from './modules/auth/reducer';
import verify from './modules/verify/reducer';
import user from './modules/user/reducer';

const rootReducer = combineReducers({
  auth,
  verify,
  user,
});

export default rootReducer;
