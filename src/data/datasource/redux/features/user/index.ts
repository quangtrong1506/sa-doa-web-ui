'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitState } from '@/data/datasource/model/InitState';
import { User } from '@/data/datasource/model';

// user: undefined
const initialState: InitState = {
  isLoading: true,
  data: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<User>) => {
      _state = {
        isLoading: false,
        data: action.payload,
      }
      return {
        isLoading: false,
        user: action.payload,
      };
    },
    renameUser: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      if (state.data)
        return {
          ...state,
          user: {
            ...state.data,
            name,
          },
        };
      else return state;
    },
    clearUser: () => {
      return {
        ...initialState,
        isLoading: false,
      };
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
