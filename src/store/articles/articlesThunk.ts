import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'services/httpService';
import { INewArticle } from 'interfaces';
import { AxiosError } from 'axios';
import { errorHandleService } from 'utils/errorHandleService';

export const getArticles = createAsyncThunk('articles/getArticles', async () => {
  const { data } = await instance.get('articles');
  return data;
});

export const getCurrentArticle = createAsyncThunk(
  'articles/getCurrentArticle',
  async (slug: string) => {
    const { data } = await instance.get(`articles/${slug}`);
    return data.article;
  }
);

export const addArticle = createAsyncThunk(
  'articles/addArticle',
  async (article: INewArticle, { rejectWithValue }) => {
    console.log(article);
    try {
      const { data } = await instance.post('articles', { article: article });
      return data;
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(errorHandleService(error));
    }
    // return data.article;
  }
);
