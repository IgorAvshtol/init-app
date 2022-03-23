import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { instance } from '../api/api';

export interface IRegisterData {
  name?: string;
  email: string;
  password: string;
}

export interface IRegisterStatus {
  error: string;
  loading: boolean;
  userData: IResponseData | null;
}

export interface IAuthData {
  error: string;
  loading: boolean;
  userData: IResponseData | null;
  setRegisterData: Dispatch<SetStateAction<IRegisterData | undefined>>;
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
  const [registerData, setRegisterData] = useState<IRegisterData>();
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

  function login(loginData: IRegisterData) {
    const user = JSON.stringify({
      user: {
        email: loginData.email,
        password: loginData.password,
      },
    });
    setStatus({ loading: true, userData: null, error: '' });
    instance
      .post(`users/login`, user)
      .then((res) => setStatus({ userData: res.data, error: 'no error', loading: false }))
      .catch((error) => setStatus({ error: error, userData: null, loading: false }));
  }

  useEffect(() => {
    if (registerData?.name) {
      register(registerData);
    } else if (registerData) {
      login(registerData);
    }
  }, [registerData]);

  return { ...status, setRegisterData };
};
