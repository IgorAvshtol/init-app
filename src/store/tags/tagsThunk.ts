import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'services/httpService';

export const getTags = createAsyncThunk('tags/getTags', async () => {
  return await instance.get('tags');
});
