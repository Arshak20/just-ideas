import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

export const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);