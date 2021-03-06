import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { follow, getUserProfile, unfollow } from './profileThunk';
import { IAuthor, IProfileData, IProfileState, TypeLoadingStatus } from 'interfaces';

const initialState: IProfileState = {
  profile: {} as IAuthor,
  loading: TypeLoadingStatus.IS_RESOLVED,
};

export const profileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.loading = TypeLoadingStatus.IS_PENDING;
      })
      .addCase(
        getUserProfile.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IProfileData>>) => {
          state.profile = action.payload.data.profile;
          state.loading = TypeLoadingStatus.IS_RESOLVED;
        }
      )
      .addCase(getUserProfile.rejected.type, (state) => {
        state.loading = TypeLoadingStatus.IS_REJECTED;
      })
      .addCase(
        follow.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IProfileData>>) => {
          state.profile.following = action.payload.data.profile.following;
        }
      )
      .addCase(
        unfollow.fulfilled.type,
        (state, action: PayloadAction<AxiosResponse<IProfileData>>) => {
          state.profile.following = action.payload.data.profile.following;
        }
      );
  },
});
