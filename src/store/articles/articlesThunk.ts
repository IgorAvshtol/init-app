import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { instance } from 'services/httpService';
import { INewArticle, IUpdateArticle } from 'interfaces';
import { errorHandleService } from 'utils/errorHandleService';
import { selectedTag } from '../tags/tagsSlice';

export const getArticles = createAsyncThunk('articles/getArticles', async () => {
  return await instance.get('articles');
});

export const getFavoriteArticles = createAsyncThunk(
  'articles/getFavouriteArticles',
  async (username: string) => {
    return await instance.get(`articles?favorited=${username}`);
  }
);

export const getCurrentUserArticles = createAsyncThunk(
  'articles/getCurrentUserArticles',
  async (username: string) => {
    return await instance.get(`articles?author=${username}`);
  }
);

export const getCurrentArticle = createAsyncThunk(
  'articles/getCurrentArticle',
  async (slug: string) => {
    return await instance.get(`articles/${slug}`);
  }
);

export const getArticlesByTag = createAsyncThunk(
  'articles/getArticlesByTag',
  async (tag: string, { dispatch }) => {
    const response = await instance.get(`articles?tag=${tag}`);
    dispatch(selectedTag(tag));
    return response;
  }
);

export const addArticle = createAsyncThunk(
  'articles/addArticle',
  async (article: INewArticle, { rejectWithValue }) => {
    try {
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

export const hasLike = createAsyncThunk('articles/like', async (slug: string) => {
  try {
    return await instance.post(`articles/${slug}/favorite`);
  } catch (e) {
    console.log(e);
  }
});

export const hasDislike = createAsyncThunk('articles/dislike', async (slug: string) => {
  try {
    return await instance.delete(`articles/${slug}/favorite`);
  } catch (e) {
    console.log(e);
  }
});
