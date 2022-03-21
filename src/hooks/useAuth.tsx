import { useState, useEffect } from 'react';
import axios from 'axios';

const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://api.realworld.io/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface IAuthData {
  name: string;
  email: string;
  password: string;
}

interface IAuthStatus {
  error: string;
  userData: any;
}

const useAuth = (data: IAuthData | undefined) => {
  console.log(data);
  // const data = { name: 'axxaxxax', email: 'rerexre@tut.by', password: 'adasdasdad' };
  const [status, setStatus] = useState<IAuthStatus>({
    error: 'no error',
    userData: 'data',
  });

  function auth(dataAuth: IAuthData) {
    const user = JSON.stringify({
      user: {
        username: dataAuth.name,
        email: dataAuth.email,
        password: dataAuth.password,
      },
    });
    console.log(user);
    instance
      .post(`users/`, user)
      .then((res) => setStatus({ userData: res.data, error: 'no error' }))
      .catch((error) => setStatus({ error: error, userData: 'error' }));
  }

  useEffect(() => {
    if (data) {
      auth(data);
    }
  }, []);

  return { ...status, auth };
};

export default useAuth;
