import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { authReducer } from './auth/authSlice';
import { articleReducer } from './articles/articleSlice';
import { commentsReducer } from './comments/commentsSliсe';
import { tagsReducer } from './tags/tagsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    articles: articleReducer.reducer,
    comments: commentsReducer.reducer,
    tags: tagsReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'auth/login/fulfilled',
          'auth/registration/fulfilled',
          'articles/getArticles/fulfilled',
          'articles/getCurrentArticle/fulfilled',
          'articles/addArticle/fulfilled',
          'articles/updateArticle/fulfilled',
          'comments/getComments/fulfilled',
          'comments/createComment/fulfilled',
          'tags/getTags/fulfilled',
          'articles/getFavouriteArticles/fulfilled',
        ],
      },
    }),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
