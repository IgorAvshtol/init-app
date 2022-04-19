import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'services/httpService';
import { ICreateComment, IDeleteComment } from 'interfaces';
import { AxiosError } from 'axios';
import { errorHandleService } from 'utils/errorHandleService';

export const getComments = createAsyncThunk('comments/getComments', async (slug: string) => {
  const { data } = await instance.get(`articles/${slug}/comments`);
  return data;
});

export const createComment = createAsyncThunk(
  'comments/createComment',
  async (data: ICreateComment, { rejectWithValue }) => {
    try {
      const { slug, comment } = data;
      const response = await instance.post(`articles/${slug}/comments`, {
        comment: { body: comment },
      });
      return response.data.comment;
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(errorHandleService(error));
    }
  }
);

export const deleteComment = createAsyncThunk(
  'comments/deleteComment',
  async (options: IDeleteComment, { rejectWithValue }) => {
    try {
      const { slug, id } = options;
      await instance.delete(`articles/${slug}/comments/${id}`);
      return id;
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(errorHandleService(error));
    }
  }
);
