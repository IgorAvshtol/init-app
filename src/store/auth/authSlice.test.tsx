import '@testing-library/jest-dom';

import { login } from './authThunk';
import { IAuthState, TypeLoadingStatus } from 'interfaces';
import { authReducer, logout } from './authSlice';

describe('authSlice', () => {
  const initialState: IAuthState = {
    user: null,
    loading: TypeLoadingStatus.IS_RESOLVED,
    error: '',
    signInModalOpen: false,
    signUpModalOpen: false,
  };
  const userData = {
    data: {
      email: 'test@tut.by',
      bio: 'bio',
      image: 'image',
      token: 'token',
      username: 'test-user',
    },
  };
  it('login status is pending', () => {
    const action = { type: login.pending };
    const state = authReducer.reducer(initialState, action);
    expect(state).toEqual({
      user: null,
      loading: TypeLoadingStatus.IS_PENDING,
      error: '',
      signInModalOpen: false,
      signUpModalOpen: false,
    });
  });
  it('login status is resolve', () => {
    const action = {
      type: login.fulfilled.type,
      payload: userData,
    };
    const state = authReducer.reducer(initialState, action);
    expect(state).toEqual({
      user: {
        email: 'test@tut.by',
        bio: 'bio',
        image: 'image',
        token: 'token',
        username: 'test-user',
      },
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
      signInModalOpen: false,
      signUpModalOpen: false,
    });
  });
  it('login status is rejected', () => {
    const action = { type: login.rejected, payload: 'Error message' };
    const state = authReducer.reducer(initialState, action);
    expect(state).toEqual({
      user: null,
      loading: TypeLoadingStatus.IS_REJECTED,
      error: 'Error message',
      signInModalOpen: false,
      signUpModalOpen: false,
    });
  });
  it('registration status is pending', () => {
    const action = { type: login.pending };
    const state = authReducer.reducer(initialState, action);
    expect(state).toEqual({
      user: null,
      loading: TypeLoadingStatus.IS_PENDING,
      error: '',
      signInModalOpen: false,
      signUpModalOpen: false,
    });
  });
  it('registration status is resolve', () => {
    const action = {
      type: login.fulfilled.type,
      payload: userData,
    };
    const state = authReducer.reducer(initialState, action);
    expect(state).toEqual({
      user: {
        email: 'test@tut.by',
        bio: 'bio',
        image: 'image',
        token: 'token',
        username: 'test-user',
      },
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
      signInModalOpen: false,
      signUpModalOpen: false,
    });
  });
  it('registration status is rejected', () => {
    const action = { type: login.rejected, payload: 'Error message' };
    const state = authReducer.reducer(initialState, action);
    expect(state).toEqual({
      user: null,
      loading: TypeLoadingStatus.IS_REJECTED,
      error: 'Error message',
      signInModalOpen: false,
      signUpModalOpen: false,
    });
  });
  it('logout', () => {
    const action = { type: logout };
    const newState = {
      user: {
        email: 'test@tut.by',
        bio: 'bio',
        image: 'image',
        token: 'token',
        username: 'test-user',
      },
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
      signInModalOpen: false,
      signUpModalOpen: false,
    };
    const state = authReducer.reducer(newState, action);
    expect(state).toEqual({
      user: null,
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
      signInModalOpen: false,
      signUpModalOpen: false,
    });
  });
});
