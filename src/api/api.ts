import axios from 'axios';
import { dataFromStorageIsValid } from '../services/dataFromStorageIsValid';

const userData = dataFromStorageIsValid();
const token = userData?.user.token;

export const instance = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${dataFromStorageIsValid()?.user.token}` : '',
  },
});
