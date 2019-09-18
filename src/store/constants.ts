import Cookies from "js-cookie";

import {
  StoreType,
  ObjectOfStringsType,
  ObjectOfAnyType,
  CookiesType,
  LocalStorageType,
  LanguageObject,
} from './types';

export const COOKIES : CookiesType = {
  TOKEN: {
    name: 'token',
    expires: 7,
  },
  LANG: {
    name: 'language',
    expires: 7,
  }
};

const isProd : boolean = process.env.NODE_ENV === 'production';
const apiUrl : string = process.env.API_URL;
const clientHost : string = process.env.CLIENT_HOST;

export const API_URL = isProd ? apiUrl || 'http://express-auth.kafedra.org' : apiUrl || 'http://127.0.0.1:8082';

export const CLIENT_HOST = isProd ? clientHost || 'http://react-auth.kafedra.org' : clientHost || 'http://localhost:3000';

// Auto auth
export const AUTO_AUTH : string | null = Cookies.get(COOKIES.TOKEN.name) || null;
const isAuth : boolean = AUTO_AUTH ? true : false;

export const LANGUAGES : LanguageObject[] = [
  { id: 1, name: 'en'},
  { id: 2, name: 'ru'},
];

// Auto language
const language : string | null = Cookies.get(COOKIES.LANG.name) || null;
export const AUTO_LANG : string = language ? language : LANGUAGES[0].name;

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
      theme: '',
    },
  },
};

export const LOCALSTORAGE : LocalStorageType = {
  PROFILE: 'UserProfile',
}

export const UTILS : ObjectOfAnyType = {
  min_password_lenght: 6,
}
