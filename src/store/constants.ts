import Cookies from "js-cookie";

import {
  StoreType,
  ObjectOfStringsType,
  ObjectOfAnyType,
  CookiesType,
  LocalType,
} from './types';

export const COOKIES : CookiesType = {
  TOKEN: {
    name: 'token',
    expires: 7,
  },
};

const isProd : boolean = process.env.NODE_ENV === 'production';
const apiUrl : string = process.env.API_URL;
const clientHost : string = process.env.CLIENT_HOST;

export const API_URL = isProd ? apiUrl || 'http://express-auth.kafedra.org' : apiUrl || 'http://127.0.0.1:8082';

export const CLIENT_HOST = isProd ? clientHost || 'http://react-auth.kafedra.org' : clientHost || 'http://localhost:3000';

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
      success: '',
    },
  },
};

export const LOCAL : LocalType = {
  PROFILE: 'UserProfile',
}

export const UTILS : ObjectOfAnyType = {
  min_password_lenght: 6,
}

export const MESSAGES : ObjectOfStringsType = {
  verify_account: 'Verify your account! A confirmation email has been sent to your inbox',
  resend_verify_email: 'Letter sent successfully',
  is_required: 'This field is required',
  password_min_lenght: `Password must be at least ${UTILS.min_password_lenght} characters`,
  password_contain_digit: 'Password must contain lowercase latin letters and at least one digit',
  email_invalid: 'Invalid email',
  passwords_do_not_match: 'Passwords do not match',
};
