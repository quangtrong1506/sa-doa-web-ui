'use client';
import { IUrl } from '@/data/datasource/redux/model/ReduxUrl';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UrlState {
  isLoading: boolean;
  url?: IUrl;
}

const initialState: UrlState = {
  isLoading: true,
  url: undefined,
};

export const urlSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setURL: (_state, action: PayloadAction<UrlState>) => {
      return {
        isLoading: false,
        url: action.payload?.url,
      };
    },
    setUrlBack: (state, action: PayloadAction<string>) => {
      return {
        isLoading: false,
        url: { ...state.url, back: action.payload },
      };
    },
  },
});

export default urlSlice.reducer;
export const { setURL, setUrlBack } = urlSlice.actions;
