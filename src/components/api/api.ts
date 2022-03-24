import axios from 'axios';

export const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://api.realworld.io/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
