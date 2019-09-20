import { combineReducers } from 'redux';

import auth from './modules/auth/reducer';
import verify from './modules/verify/reducer';
import utils from './modules/utils/reducer';
import user from './modules/user/reducer';

const rootReducer = combineReducers({
  auth,
  verify,
  utils,
  user,
});

export default rootReducer;
