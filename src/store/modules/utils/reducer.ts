import { Action } from 'redux';

import { INITIAL_STATE } from '../../constants';
import { StoreType } from '../../types';

import {
  SET_LANGUAGE,
} from './actions';

const utils = (state : StoreType, action: Action & any) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language,
      });
    default:
      return state;
  };
};

export default utils;
