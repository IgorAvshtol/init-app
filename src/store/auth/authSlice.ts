import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signin, signup } from './authThunk';
import { IAuthState, IGetCurrentUser, IUser, TypeLoadingStatus } from 'interfaces';
import { removeUserFromLocalStorage } from 'services/localStorage/localStorage';

const initialState: IAuthState = {
  user: null,
  loading: TypeLoadingStatus.IS_RESOLVED,
  error: '',
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
        state.error = '';
      })
      .addCase(signin.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.loading = TypeLoadingStatus.IS_RESOLVED;
        state.error = '';
      })
      .addCase(signin.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
        state.error = '';
      })
      .addCase(signup.fulfilled.type, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.loading = TypeLoadingStatus.IS_RESOLVED;
        state.error = '';
      })
      .addCase(signup.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
        state.error = action.payload;
      });
  },
});

export const { entryIsSuccess, logout, getCurrentUser } = authReducer.actions;
