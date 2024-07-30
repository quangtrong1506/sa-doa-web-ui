'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitState, UrlState } from '@/data/datasource/model/InitState';
import { MyUrl } from '@/data/datasource/model/MyUrl';

const initialState: UrlState = {
  isLoading: true, url: undefined,
};

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    setUrl: (_state, action: PayloadAction<MyUrl | undefined>) => {
      return {
        isLoading: false,
        url: action.payload,
      };
    },
    setUrlBack: (state, action: PayloadAction<string>) => {
      return {
        isLoading: false,
        url: { ...state.url, back: action.payload },
      };
    },
    resetUrlBack: (_state) => {
      return {
        ..._state,
        url: { ..._state.url, back: undefined },
      };
    },
  },
});

export default urlSlice.reducer;
export const { setUrl, setUrlBack, resetUrlBack } = urlSlice.actions;
