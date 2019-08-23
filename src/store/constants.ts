import Cookies from "js-cookie";

export const API_URL = process.env.API_URL || 'http://127.0.0.1:8082'; // eslint-disable-line

export const COOKIES = {
  TOKEN: {
    name: 'token',
    expires: 7,
  },
};

let isAuth;
const t = Cookies.get(COOKIES.TOKEN.name);
if (t) {
  isAuth = true;
} else isAuth = false;

export const INITIAL_STATE = {
  rootReducer: {
    isFetching: false,
    isAuth: isAuth,
    error: '',
  }
};

export const PAGES = [
  {
    path: '/',
    aria: 'Index page',
    title: 'Home',
  },
];
