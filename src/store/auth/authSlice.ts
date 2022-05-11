import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { login, registration, updateUserData } from './authThunk';
import { IAuthState, IGetCurrentUser, IUser, TypeLoadingStatus } from 'interfaces';
import { removeUserFromLocalStorage } from 'services/localStorage/localStorage';

const initialState: IAuthState = {
  user: null,
  loading: TypeLoadingStatus.IS_RESOLVED,
  error: '',
  signInModalOpen: false,
  signUpModalOpen: false,
};

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getCurrentUser: (state, action: PayloadAction<IGetCurrentUser>) => {
      state.user = action.payload.user;
    },
    entryIsSuccess: (state) => {
      state.loading = TypeLoadingStatus.IS_RESOLVED;
      state.error = '';
    },
    logout: (state) => {
      removeUserFromLocalStorage();
      state.user = null;
    },
    isSignInModalOpen: (state) => {
      state.signInModalOpen = !state.signInModalOpen;
    },
    isSignUpModalOpen: (state) => {
      state.signUpModalOpen = !state.signUpModalOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
        state.error = '';
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AxiosResponse<IUser>>) => {
        state.user = action.payload.data;
        state.loading = TypeLoadingStatus.IS_RESOLVED;
        state.error = '';
        state.signInModalOpen = false;
      })
      .addCase(login.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
        state.error = action.payload;
      })
      .addCase(registration.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
        state.error = '';
      })
      .addCase(registration.fulfilled, (state, action: PayloadAction<AxiosResponse<IUser>>) => {
        state.user = action.payload.data;
        state.loading = TypeLoadingStatus.IS_RESOLVED;
        state.error = '';
        state.signUpModalOpen = false;
      })
      .addCase(registration.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
        state.error = action.payload;
      })
      .addCase(
        updateUserData.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IUser>>) => {
          state.user = action.payload.data;
        }
      );
  },
});

export const { entryIsSuccess, logout, getCurrentUser, isSignInModalOpen, isSignUpModalOpen } =
  authReducer.actions;
