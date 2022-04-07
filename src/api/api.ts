import axios from 'axios';
import { dataFromStorageIsValid } from '../services/dataFromStorageIsValid';

export const instance = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${dataFromStorageIsValid()?.user.token}`,
  },
});
