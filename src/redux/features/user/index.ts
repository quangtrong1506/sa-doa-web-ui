'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from './user';

interface UserState {
  isLoading: boolean;
  user?: IUser;
}
const userState: IUser = {
  id: 'id-1',
  email: 'quangtrong.admin@gmail.com',
  name: 'Trọng Sa Đoạ',
  password: '123456',
  role: 'admin',
  avatar: '/images/gif/17.gif',
};
// user: undefined
const initialState: UserState = {
  isLoading: false,
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
