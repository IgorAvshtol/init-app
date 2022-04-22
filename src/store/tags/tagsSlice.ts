import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITags, ITagsState, TypeLoadingStatus } from 'interfaces';
import { getTags } from './tagsThunk';
import { AxiosResponse } from 'axios';

const initialState: ITagsState = {
  tags: [],
  loading: TypeLoadingStatus.IS_RESOLVED,
  error: '',
};

export const tagsReducer = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTags.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(getTags.fulfilled.type, (state, action: PayloadAction<AxiosResponse<ITags>>) => {
        state.tags = action.payload.data.tags;
        state.loading = TypeLoadingStatus.IS_RESOLVED;
        state.error = '';
      })
      .addCase(getTags.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
        state.error = action.payload;
      });
  },
});
