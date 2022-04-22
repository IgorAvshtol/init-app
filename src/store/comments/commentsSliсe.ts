import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment, ICommentsState, IGetComments, TypeLoadingStatus } from 'interfaces';
import { createComment, deleteComment, getComments } from './commentsThunk';
import { AxiosResponse } from 'axios';

const initialState: ICommentsState = {
  comments: [],
  loading: TypeLoadingStatus.IS_RESOLVED,
  error: '',
};

export const commentsReducer = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(
        getComments.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IGetComments>>) => {
          state.comments = action.payload.data.comments;
          state.loading = TypeLoadingStatus.IS_RESOLVED;
        }
      )
      .addCase(getComments.rejected, (state) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
      })
      .addCase(
        createComment.fulfilled.type,
        (state: ICommentsState, action: PayloadAction<AxiosResponse<IComment>>) => {
          state.comments.push(action.payload.data);
          state.loading = TypeLoadingStatus.IS_RESOLVED;
          state.error = '';
        }
      )
      .addCase(
        createComment.rejected.type,
        (state: ICommentsState, action: PayloadAction<string>) => {
          state.error = action.payload;
        }
      )
      .addCase(deleteComment.fulfilled, (state: ICommentsState, action: PayloadAction<number>) => {
        state.comments = state.comments.filter((comment) => comment.id !== action.payload);
      });
  },
});
