import Cookies from "js-cookie";

import {
  StoreType,
  CookiesType,
  MessagesType,
  LocalType,
} from './types';

export const API_URL : string = process.env.API_URL || 'http://127.0.0.1:8082';

export const COOKIES : CookiesType = {
  TOKEN: {
    name: 'token',
    expires: 7,
  },
};

// Auto auth
export const AUTO_AUTH : string | null = Cookies.get(COOKIES.TOKEN.name) || null;
const isAuth : boolean = AUTO_AUTH ? true : false;

export const INITIAL_STATE : StoreType = {
  rootReducer: {
    auth: {
      isFetching: false,
      isAuth: isAuth,
      error: '',
      success: '',
    },
    user: {
      isFetching: false,
      profile: {
        userid: null,
        usermail: null,
        username: null,
        isVerify: false,
      },
      error: '',
      success: '',
    },
  },
};

export const LOCAL : LocalType = {
  PROFILE: 'UserProfile',
}

export const MESSAGES : MessagesType = {
  verify_account: { message: 'Verify your account! A confirmation email has been sent to your inbox' },
  resend_verify_email: { message: 'Letter sent successfully'},
};
