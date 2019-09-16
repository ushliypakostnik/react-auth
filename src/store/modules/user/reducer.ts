import { Action } from 'redux';

import i18n from '../../../utils/i18n';

import { INITIAL_STATE } from '../../constants';
import { StoreType } from '../../types';

import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR,
  SEND_VERIFY_EMAIL,
  SEND_VERIFY_EMAIL_SUCCESS,
  SEND_VERIFY_EMAIL_ERROR,
} from './actions';
import { AUTH_LOGOUT } from '../auth/actions';

const user = (state : StoreType, action: Action & any) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case USER_SUCCESS:
      let success = '';
      if (!action.profile.isVerify) {
        success = i18n.t('validations.verify_account');
      }
      return Object.assign({}, state, {
        isFetching: false,
        profile: action.profile,
        success,
      });
    case USER_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case SEND_VERIFY_EMAIL:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case SEND_VERIFY_EMAIL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        success: i18n.t('validations.resend_verify_email'),
      });
    case SEND_VERIFY_EMAIL_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case AUTH_LOGOUT:
      return Object.assign({}, state, {
        profile: {},
        success: '',
      });
    default:
      return state;
  };
};

export default user;
