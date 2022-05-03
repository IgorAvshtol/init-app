import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITabsState } from 'interfaces';

const initialState: ITabsState = {
  selectedTab: 1,
};

export const tabsReducer = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<number>) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { changeTab } = tabsReducer.actions;
