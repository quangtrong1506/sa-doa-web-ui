'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitState, UserState } from '@/data/datasource/model/InitState';
import { User } from '@/data/datasource/model';

// user: undefined
const initialState: UserState = {
  isLoading: true, user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<User>) => {
      console.log("action.payload", action.payload);
      return {
        isLoading: false,
        user: action.payload,
      };
    },
    renameUser: (state, action: PayloadAction<string>) => {
      // return {
      //   ...state,
      //   user: {
      //     ...state.user,
      //     name: action.payload,
      //   },
      // };
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
