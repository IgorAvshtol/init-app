import { useState, useEffect } from 'react';
import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://api.realworld.io/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface IRegisterData {
  name: string;
  email: string;
  password: string;
}

interface IRegisterStatus {
  error: string;
  loading: boolean;
  userData: IResponseData | null;
}

export interface IResponseData {
  user: IResponse | null;
}

export interface IResponse {
  email: string;
  bio: string;
  image: string;
  token: string;
}

export const useRegister = (data: IRegisterData | undefined) => {
  const [status, setStatus] = useState<IRegisterStatus>({
    error: '',
    userData: null,
    loading: false,
  });

  function register(registerData: IRegisterData) {
    const user = JSON.stringify({
      user: {
        username: registerData.name,
        email: registerData.email,
        password: registerData.password,
      },
    });
    setStatus({ loading: true, userData: null, error: '' });
    instance
      .post(`users/`, user)
      .then((res) => setStatus({ userData: res.data, error: 'no error', loading: false }))
      .catch((error) => setStatus({ error: error, userData: null, loading: false }));
  }

  useEffect(() => {
    if (data) {
      register(data);
    }
  }, [data]);

  return { ...status, auth: register };
};
