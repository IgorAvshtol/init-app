import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'services/httpService';

export const getUserProfile = createAsyncThunk(
  'profile/getUserProfile',
  async (username: string) => {
    return await instance.get(`profiles/${username}`);
  }
);

export const follow = createAsyncThunk('profile/follow', async (username: string) => {
  return await instance.post(`profiles/${username}/follow`);
});

export const unfollow = createAsyncThunk('profile/unfollow', async (username: string) => {
  return await instance.delete(`profiles/${username}/follow`);
});
