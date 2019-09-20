import axios from 'axios';
import Cookies from "js-cookie";

import {
  COOKIES,
  API_URL,
  LOCALSTORAGE,
  AUTO_AUTH,
  AUTO_LANG,
} from '../store/constants';

const Api = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  withCredentials: true,
});

// Auto auth
if (AUTO_AUTH) {
  // eslint-disable-next-line dot-notation
  Api.defaults.headers.common['Authorization'] = `Token ${AUTO_AUTH}`;
}

// Auto language
Cookies.set(COOKIES.LANG.name, AUTO_LANG, { expires: COOKIES.LANG.expires });

export const setAuth = (token: string) : void => {
  Cookies.set(COOKIES.TOKEN.name, token, { expires: COOKIES.TOKEN.expires });
  Api.defaults.headers.common['Authorization'] = `Token ${token}`;
};

export const deleteAuth = () : void => {
  localStorage.removeItem(LOCALSTORAGE.PROFILE);
  Cookies.remove(COOKIES.TOKEN.name);
  delete Api.defaults.headers.common['Authorization'];
};

export const rememberLanguage = (language: string) : void => {
  Cookies.set(COOKIES.LANG.name, language, { expires: COOKIES.LANG.expires });
};

export const rememberTheme = (theme: string) : void => {
  Cookies.set(COOKIES.THEME.name, theme, { expires: COOKIES.THEME.expires });
};

export const POST_AUTH_PATH = '/api/user/login';
export const GET_AUTH_FACEBOOK_PATH = '/api/user/facebook';
export const GET_AUTH_VKONTAKTE_PATH = '/api/user/vkontakte';
export const GET_USER_PATH = '/api/user/profile';
export const POST_VERIFY = '/api/user/verify';
export const POST_REMIND_PASSWORD_PATH = '/api/user/remind';
export const POST_NEW_PASSWORD_PATH = '/api/user/password';
export const POST_VERIFY_EMAIL_PATH = '/api/user/send-verify-email';

export default Api;

