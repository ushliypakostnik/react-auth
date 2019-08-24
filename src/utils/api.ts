import axios from 'axios';
import Cookies from "js-cookie";

import { COOKIES, API_URL, LOCAL } from '../store/constants';

// Auto auth
const t = Cookies.get(COOKIES.TOKEN.name);
if (t) {
  // eslint-disable-next-line dot-notation
  axios.defaults.headers.common['Authorization'] = `Token ${t}`;
}

const Api = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

export const setAuth = (token: string) : void => {
  Cookies.set(COOKIES.TOKEN.name, token, { expires: COOKIES.TOKEN.expires });
  Api.defaults.headers.common['Authorization'] = `Token ${token}`;
};

export const deleteAuth = () : void => {
  localStorage.removeItem(LOCAL.PROFILE);
  Cookies.remove(COOKIES.TOKEN.name);
  delete Api.defaults.headers.common['Authorization'];
};

export const POST_AUTH_PATH = '/api/user/login';
export const GET_USER_PATH = '/api/user/profile';
export const POST_REMIND_PASSWORD_PATH = '/api/user/remind';
export const POST_NEW_PASSWORD_PATH = '/api/user/password';
export const POST_VERIFY_EMAIL_PATH = '/api/user/send-verify-email';

export default Api;

