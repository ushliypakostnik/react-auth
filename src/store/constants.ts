export const API_URL = process.env.API_URL || 'http://127.0.0.1:8082'; // eslint-disable-line

export const INITIAL_STATE = {
  rootReducer: {
    isFetching: false,
    auth: {
      isAuth: false,
    },
    error: [],
  }
};

export const PAGES = [
  {
    path: '/',
    aria: 'Index page',
    title: 'Home',
  },
];
