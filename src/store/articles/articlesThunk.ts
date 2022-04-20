import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { instance } from 'services/httpService';
import { INewArticle, IUpdateArticle } from 'interfaces';
import { errorHandleService } from 'utils/errorHandleService';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    try {
      const { data } = await instance.post('articles', { article: article });
      navigate('/');
      return data;
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(errorHandleService(error));
    }
  }
);

export const updateArticle = createAsyncThunk(
  'articles/updateArticle',
  async (updateArticle: IUpdateArticle, { rejectWithValue }) => {
    const navigate = useNavigate();
    try {
      const { slug, ...article } = updateArticle;
      const { data } = await instance.put(`articles/${slug}`, { article: article });
      navigate('/');
      return data;
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
