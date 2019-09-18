import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import i18n from '../../../utils/i18n';
import { rememberLanguage } from '../../../utils/api';

// Actions Types
////////////////////////////////////////////////////////////

export const SET_LANGUAGE = 'SET_LANGUAGE';

// Action Creators
////////////////////////////////////////////////////////////

export const setLanguage : ActionCreator<Action> = (language: string) => {
  rememberLanguage(language);
  return {
    type: SET_LANGUAGE,
    language,
  };
};

export const changeLanguage : ActionCreator<ThunkAction<any, Action, void, any>>
  = (language: string) => {
    return dispatch => {
      return i18n.changeLanguage(language)
        .then((t) => {
          dispatch(setLanguage(language));
        },
        (error) => {}
      );
    };
};
