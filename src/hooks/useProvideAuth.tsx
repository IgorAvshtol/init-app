import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

import { instance } from '../api/api';
import {
  removeUserFromLocalStorage,
  setUserFromLocalStorage,
} from '../services/localStorage/localStorage';
import { dataFromStorageIsValid } from '../services/dataFromStorageIsValid';
import { errorHandleService } from '../services/errorHandleService';

export interface IRegisterData {
  name?: string;
  email: string;
  password: string;
}

export interface IAuthData {
  error: string | null;
  setError: Dispatch<SetStateAction<string>>;
  loading: boolean;
  user: IResponseData | null;
  signin: (signInData: IRegisterData) => void;
  signup: (signUpData: IRegisterData) => void;
  logout: () => void;
}

export interface IResponseData {
  user: IResponse;
}

export interface IResponse {
  email: string;
  bio: string;
  image: string;
  token: string;
}

export const AuthContext = createContext<IAuthData | undefined>(undefined);

interface IProviderAuth {
  children: React.ReactNode;
}

export function ProvideAuth({ children }: IProviderAuth) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a ProvideAuth');
  }
  return context;
};

export const useProvideAuth = () => {
  const [user, setUser] = useState<IResponseData | null>(dataFromStorageIsValid);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const responseDataHandling = (data: IResponseData) => {
    if (data.user) {
      setUserFromLocalStorage(data);
      setUser(data);
      setLoading(false);
    }
  };

  const signup = (signUpData: IRegisterData) => {
    const user = {
      user: {
        username: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
      },
    };
    setLoading(true);
    instance
      .post(`users/`, user)
      .then((res) => responseDataHandling(res.data))
      .catch((err) => {
        const handledError = errorHandleService(err);
        setError(handledError);
        setLoading(false);
      });
  };

  const signin = (signInData: IRegisterData) => {
    const user = {
      user: {
        email: signInData.email,
        password: signInData.password,
      },
    };
    setLoading(true);
    instance
      .post(`users/login`, user)
      .then((res) => responseDataHandling(res.data))
      .catch((err) => {
        const handledError = errorHandleService(err);
        setError(handledError);
        setLoading(false);
      });
  };

  const logout = () => {
    removeUserFromLocalStorage();
    setUser(null);
  };

  return { user, error, loading, setError, signin, signup, logout };
};
