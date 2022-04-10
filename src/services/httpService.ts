import axios from 'axios';
import { dataFromStorageIsValid } from 'utils/dataFromStorageIsValid';

export const instance = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(function (config) {
  const userData = dataFromStorageIsValid();
  const token = userData?.user.token;
  if (config.headers) config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
