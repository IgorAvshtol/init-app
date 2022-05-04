import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { ITags, ITagsState, TypeLoadingStatus } from 'interfaces';
import { getTags } from './tagsThunk';

const initialState: ITagsState = {
  tags: [],
  selectedTag: '',
  loading: TypeLoadingStatus.IS_RESOLVED,
  error: '',
};

export const tagsReducer = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    selectedTag: (state, action: PayloadAction<string>) => {
      state.selectedTag = action.payload;
    },
  },
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

export const { selectedTag } = tagsReducer.actions;
