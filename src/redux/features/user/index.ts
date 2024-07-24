'use client';
import { IUser } from '@/data/datasource/redux/model/ReduxUser';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  isLoading: boolean;
  user?: IUser;
}

const initialState: UserState = {
  isLoading: true,
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<UserState>) => {
      return {
        isLoading: false,
        user: action.payload?.user,
      };
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
