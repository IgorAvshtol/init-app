import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { instance } from 'services/httpService';
import { errorHandleService } from 'utils/errorHandleService';
import { setUserFromLocalStorage } from 'services/localStorage/localStorage';
import { IRegisterData } from 'interfaces';
import { mutate } from 'swr';

export const login = createAsyncThunk(
  'auth/login',
  async (signInData: IRegisterData, { rejectWithValue }) => {
    const user = {
      user: {
        email: signInData.email,
        password: signInData.password,
      },
    };
    try {
      const response = await instance.post(`users/login`, user);
      await setUserFromLocalStorage(response.data);
      await mutate('userData', response?.data);
      return response;
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(errorHandleService(error));
    }
  }
);

export const registration = createAsyncThunk(
  'auth/registration',
  async (signUpData: IRegisterData, { rejectWithValue }) => {
    const user = {
      user: {
        username: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
      },
    };
    try {
      const response = await instance.post(`users/`, user);
      await setUserFromLocalStorage(response.data);
      return response;
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(errorHandleService(error));
    }
  }
);
