import '@testing-library/jest-dom';

import { ICommentsState, TypeLoadingStatus } from 'interfaces';
import { createComment, deleteComment, getComments } from './commentsThunk';
import { commentsReducer } from './commentsSliсe';

describe('comments', () => {
  const initialState: ICommentsState = {
    comments: [],
    loading: TypeLoadingStatus.IS_RESOLVED,
    error: '',
  };
  const newComment = {
    data: {
      id: 2,
      createdAt: 'createdAt2',
      updatedAt: 'updatedAt2',
      body: 'body2',
      author: {
        username: 'user2',
        bio: 'bio2',
        image: 'image2',
        following: false,
      },
    },
  };
  const newComments = {
    data: {
      comments: [
        {
          id: 1,
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
          body: 'body',
          author: {
            username: 'user',
            bio: 'bio',
            image: 'image',
            following: false,
          },
        },
      ],
    },
  };
  it('getComments status is pending', () => {
    const action = { type: getComments.pending };
    const state = commentsReducer.reducer(initialState, action);
    expect(state).toEqual({ comments: [], loading: TypeLoadingStatus.IS_PENDING, error: '' });
  });
  it('getComments status is resolve', () => {
    const action = {
      type: getComments.fulfilled.type,
      payload: newComments,
    };
    const state = commentsReducer.reducer(initialState, action);
    expect(state).toEqual({
      comments: [
        {
          id: 1,
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
          body: 'body',
          author: {
            username: 'user',
            bio: 'bio',
            image: 'image',
            following: false,
          },
        },
      ],
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
    });
  });
  it('getComments status is rejected', () => {
    const action = { type: getComments.rejected };
    const state = commentsReducer.reducer(initialState, action);
    expect(state).toEqual({
      comments: [],
      loading: TypeLoadingStatus.IS_REJECTED,
      error: '',
    });
  });
  it('createComment status is resolve', () => {
    const action = {
      type: createComment.fulfilled.type,
      payload: newComment,
    };
    const state = commentsReducer.reducer(initialState, action);
    expect(state).toEqual({
      comments: [
        {
          id: 2,
          createdAt: 'createdAt2',
          updatedAt: 'updatedAt2',
          body: 'body2',
          author: {
            username: 'user2',
            bio: 'bio2',
            image: 'image2',
            following: false,
          },
        },
      ],
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
    });
  });
  it('createComment status is rejected', () => {
    const action = { type: createComment.rejected.type, payload: 'Error message' };
    const state = commentsReducer.reducer(initialState, action);
    expect(state).toEqual({
      comments: [],
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: 'Error message',
    });
  });
  it('deleteComment status is resolve', () => {
    const action = {
      type: deleteComment.fulfilled.type,
      payload: 2,
    };
    const newState = {
      comments: [newComment.data],
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
    };
    const state = commentsReducer.reducer(newState, action);
    expect(state).toEqual({
      comments: [],
      loading: TypeLoadingStatus.IS_RESOLVED,
      error: '',
    });
  });
});
