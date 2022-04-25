import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { instance } from 'services/httpService';
import { INewArticle, IUpdateArticle } from 'interfaces';
import { errorHandleService } from 'utils/errorHandleService';

export const getArticles = createAsyncThunk('articles/getArticles', async () => {
  return await instance.get('articles');
});

export const getCurrentArticle = createAsyncThunk(
  'articles/getCurrentArticle',
  async (slug: string) => {
    return await instance.get(`articles/${slug}`);
  }
);

export const addArticle = createAsyncThunk(
  'articles/addArticle',
  async (article: INewArticle, { rejectWithValue }) => {
    try {
      const resp = await instance.post('articles', { article: article });
      console.log(resp);
      return await instance.post('articles', { article: article });
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(errorHandleService(error));
    }
  }
);

export const updateArticle = createAsyncThunk(
  'articles/updateArticle',
  async (updateArticle: IUpdateArticle, { rejectWithValue }) => {
    try {
      const { slug, ...article } = updateArticle;
      return await instance.put(`articles/${slug}`, { article: article });
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(errorHandleService(error));
    }
  }
);

export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (slug: string) => {
  try {
    const { data } = await instance.delete(`articles/${slug}`);
    return data;
  } catch (e) {
    console.log(e);
  }
});
