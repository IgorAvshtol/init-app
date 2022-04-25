import '@testing-library/jest-dom';

import { ITagsState, TypeLoadingStatus } from 'interfaces';
import { getTags } from './tagsThunk';
import { tagsReducer } from './tagsSlice';

describe('tagsSlice', () => {
  const initialState: ITagsState = {
    tags: [],
    loading: TypeLoadingStatus.IS_RESOLVED,
    error: '',
  };
  it('getTags status is pending', () => {
    const action = { type: getTags.pending };
    const state = tagsReducer.reducer(initialState, action);
    expect(state).toEqual({ tags: [], loading: TypeLoadingStatus.IS_PENDING, error: '' });
  });
  it('getTags status is resolve', () => {
    const action = {
      type: getTags.fulfilled.type,
      payload: { data: { tags: ['tag'] } },
    };
    const state = tagsReducer.reducer(initialState, action);
    expect(state).toEqual({
      tags: ['tag'],
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
    });
  });
  it('getTags status is rejected', () => {
    const action = { type: getTags.rejected, payload: 'Error message' };
    const state = tagsReducer.reducer(initialState, action);
    expect(state).toEqual({
      tags: [],
      loading: TypeLoadingStatus.IS_REJECTED,
      error: 'Error message',
    });
  });
});
