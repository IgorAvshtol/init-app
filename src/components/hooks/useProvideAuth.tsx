import React, { createContext, useContext, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { instance } from '../api/api';

export interface IRegisterData {
  name?: string;
  email: string;
  password: string;
}

export interface IAuthData {
  error: string | null;
  user: IResponseData | null;
  signin: (signInData: IRegisterData) => void;
  signup: (signUpData: IRegisterData) => void;
  logout: () => void;
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

export const AuthContext = createContext<IAuthData>(null!);

interface IProviderAuth {
  children: React.ReactNode;
}

export function ProvideAuth({ children }: IProviderAuth) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState<IResponseData | null>(null);
  const [error, setError] = useState<string>('');

  const errorHandling = (err: AxiosError) => {
    const responseErrorData = err.response?.data.errors;
    const resArray = [];
    for (const [key, value] of Object.entries(responseErrorData)) {
      resArray.push(`${key} ${value}`);
    }
    setError(String(resArray));
  };

  const responseDataHandling = (data: IResponseData) => {
    if (data.user) {
      localStorage.setItem('userData', JSON.stringify(data));
      setUser(data);
    }
  };

  const currentUser = () => {
    const data = localStorage.getItem('userData');
    if (data) setUser(JSON.parse(data!));
  };

  function signup(signUpData: IRegisterData) {
    const user = {
      user: {
        username: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
      },
    };
    instance
      .post(`users/`, user)
      .then((res) => responseDataHandling(res.data))
      .catch((err) => {
        errorHandling(err);
      });
  }

  function signin(signInData: IRegisterData) {
    const user = {
      user: {
        email: signInData.email,
        password: signInData.password,
      },
    };
    instance
      .post(`users/login`, user)
      .then((res) => responseDataHandling(res.data))
      .catch((err) => {
        errorHandling(err);
      });
  }

  function logout() {
    localStorage.clear();
    setUser(null);
  }

  useEffect(() => {
    currentUser();
  }, []);

  return { user, error, signin, signup, logout };
};
