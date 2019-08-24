import { combineReducers } from 'redux';

import auth from './modules/auth/reducer';
import user from './modules/user/reducer';

const rootReducer = combineReducers({
  auth,
  user,
});

export default rootReducer;
