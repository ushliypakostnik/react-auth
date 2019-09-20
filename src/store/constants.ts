import Cookies from "js-cookie";

import {
  StoreType,
  ObjectOfStringsType,
  ObjectOfAnyType,
  CookiesType,
  LocalStorageType,
  LanguageObjectType,
  ThemeObjectType,
} from './types';

export const COOKIES : CookiesType = {
  TOKEN: {
    name: 'token',
    expires: 7,
  },
  LANG: {
    name: 'language',
    expires: 7,
  },
  THEME: {
    name: 'theme',
    expires: 7,
  }
};


const isProd : boolean = process.env.NODE_ENV === 'production';
const apiUrl : string = process.env.REACT_APP_API_URL;
export const API_URL = isProd ? apiUrl || 'https://express-auth.kafedra.org' : apiUrl || 'http://localhost:8082';

// Auto auth
export const AUTO_AUTH : string | null = Cookies.get(COOKIES.TOKEN.name) || null;
const isAuth : boolean = AUTO_AUTH ? true : false;

export const LANGUAGES : LanguageObjectType[] = [
  { id: 1, name: 'en' },
  { id: 2, name: 'ru' },
];

// Auto language
const language : string | null = Cookies.get(COOKIES.LANG.name) || null;
export const AUTO_LANG : string = language || LANGUAGES[1].name;


export const THEMES : ThemeObjectType[] = [
  { id: 1, name: 'light'},
  { id: 2, name: 'dark' },
];

// Auto theme
const theme : string | null = Cookies.get(COOKIES.THEME.name) || null;
export const AUTO_THEME : string = theme || THEMES[1].name;


export const INITIAL_STATE : StoreType = {
  rootReducer: {
    auth: {
      isFetching: false,
      isAuth: isAuth,
      error: '',
      success: '',
      result: '',
    },
    verify: {
      isFetching: false,
      result: '',
    },
    user: {
      isFetching: false,
      profile: {
        id: null,
        usermail: null,
        username: null,
        isVerify: false,
        userdata: [],
      },
      error: '',
      success: false,
    },
    utils: {
      language: AUTO_LANG,
      theme: AUTO_THEME,
    },
  },
};


export const LOCALSTORAGE : LocalStorageType = {
  PROFILE: 'UserProfile',
}

export const UTILS : ObjectOfAnyType = {
  min_password_lenght: 6,
}
