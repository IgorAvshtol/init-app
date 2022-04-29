import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'services/httpService';

export const getUserProfile = createAsyncThunk(
  'profile/getUserProfile',
  async (username: string) => {
    return await instance.get(`profiles/${username}`);
  }
);
