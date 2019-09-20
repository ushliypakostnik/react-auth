import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import i18n from '../../../utils/i18n';
import {
  rememberLanguage,
  rememberTheme,
} from '../../../utils/api';

// Actions Types
////////////////////////////////////////////////////////////

export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_THEME = 'SET_THEME';

// Action Creators
////////////////////////////////////////////////////////////

export const clearMessages : ActionCreator<Action> = () => {
  return {
    type: CLEAR_MESSAGES,
  };
};

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

export const changeTheme : ActionCreator<Action> = (theme: string) => {
  rememberTheme(theme);
  return {
    type: SET_THEME,
    theme,
  };
};
