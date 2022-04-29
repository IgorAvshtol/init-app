import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { authReducer } from './auth/authSlice';
import { articleReducer } from './articles/articleSlice';
import { commentsReducer } from './comments/commentsSliсe';
import { tagsReducer } from './tags/tagsSlice';
import { profileReducer } from './profile/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    articles: articleReducer.reducer,
    comments: commentsReducer.reducer,
    tags: tagsReducer.reducer,
    profile: profileReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'auth/login/fulfilled',
          'auth/registration/fulfilled',
          'articles/getArticles/fulfilled',
          'articles/getCurrentArticle/fulfilled',
          'articles/getCurrentUserArticles/fulfilled',
          'articles/addArticle/fulfilled',
          'articles/updateArticle/fulfilled',
          'articles/getFavouriteArticles/fulfilled',
          'articles/like/fulfilled',
          'articles/dislike/fulfilled',
          'comments/getComments/fulfilled',
          'comments/createComment/fulfilled',
          'tags/getTags/fulfilled',
          'profile/getUserProfile/fulfilled',
        ],
      },
    }),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
