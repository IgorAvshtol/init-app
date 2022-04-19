import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/httpService';
import { ITags } from '../../interfaces';

export const getTags = createAsyncThunk('tags', async () => {
  const { data } = await instance.get('tags');
  return data as ITags;
});
