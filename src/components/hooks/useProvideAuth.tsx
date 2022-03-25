import React, { createContext, useContext, useState } from 'react';

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
      .then((res) => setUser(res.data))
      .catch((error) => setError(error));
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
      .then((res) => setUser(res.data))
      .catch((error) => setError(error));
  }

  return { user, error, signin, signup };
};
