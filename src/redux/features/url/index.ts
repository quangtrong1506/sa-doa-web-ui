'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUrl } from './url';

interface UrlProps {
  isLoading: boolean;
  url?: IUrl;
}

const initialState: UrlProps = {
  isLoading: true,
  url: undefined,
};

export const urlSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setURL: (_state: UrlProps, action: PayloadAction<UrlProps>) => {
      return {
        isLoading: false,
        url: action.payload?.url,
      };
    },
    setUrlBack: (state: UrlProps, action: PayloadAction<string>) => {
      return {
        isLoading: false,
        url: { ...state.url, back: action.payload },
      };
    },
    resetUrlBack: (state: UrlProps) => {
      return {
        ...state,
        url: { ...state.url, back: undefined },
      };
    },
  },
});

export default urlSlice.reducer;
export const { setURL, setUrlBack, resetUrlBack } = urlSlice.actions;
