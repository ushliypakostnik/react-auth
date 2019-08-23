import axios from 'axios';
import Cookies from "js-cookie";

import { COOKIES, API_URL } from '../store/constants';

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

export default Api;

