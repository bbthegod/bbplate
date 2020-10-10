/* eslint-disable no-param-reassign */
import axios from 'axios';
import * as url from './url';
const instance = axios.create({});
instance.interceptors.request.use(
  async config => {
    // const token = localStorage.getItem('token');
    // if (config.url.startsWith('/')) config.url = `${url.BASE_URL}${config.url}`;
    // if (config.url.startsWith(url.BASE_URL)) {
    //   if (!token) window.location = '/login';
    //   config.headers.common.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => Promise.reject(error),
);
export default instance;
