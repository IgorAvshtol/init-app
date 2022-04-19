import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment, ICommentsState, IGetComments, TypeLoadingStatus } from 'interfaces';
import { createComment, deleteComment, getComments } from './commentsThunk';

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
      .addCase(getComments.fulfilled, (state, action: PayloadAction<IGetComments>) => {
        state.comments = action.payload.comments;
        state.loading = TypeLoadingStatus.IS_RESOLVED;
      })
      .addCase(getComments.rejected, (state) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
      })
      .addCase(
        createComment.fulfilled,
        (state: ICommentsState, action: PayloadAction<IComment>) => {
          state.comments.push(action.payload);
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
