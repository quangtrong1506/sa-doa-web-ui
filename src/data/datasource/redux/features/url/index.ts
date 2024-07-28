'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitState } from '@/data/datasource/model/InitState';
import { MyUrl } from '@/data/datasource/model/MyUrl';

const initialState: InitState = {
  isLoading: false,
  data: undefined,
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
      if(state.data !== undefined) {
        console.log(state)
        return {
          isLoading: false,
          url: { ...state.data.url, back: action.payload },
        };
      }
    },
    resetUrlBack: (_state) => {
      return {
        ..._state,
        url: { ..._state.data.url, back: undefined },
      };
    },
  },
});

export default urlSlice.reducer;
export const { setUrl, setUrlBack, resetUrlBack } = urlSlice.actions;
