/** @format */

import axios from 'axios';
import Cookies from 'js-cookie';

//instance to be used in the protected routes of the backend
export const axiosInstance = axios.create({
  baseURL: 'https://portfolio-2-backend.herokuapp.com/api/v1',
  headers: {
    Authorization: 'Bearer ' + Cookies.get('token'),
  },
});

//instance to be user for signup and login i.e. not protected routes on the backend
export const axiosAuthInstance = axios.create({
  baseURL: 'https://portfolio-2-backend.herokuapp.com/api/v1',
});
