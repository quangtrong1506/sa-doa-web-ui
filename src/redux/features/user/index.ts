'use client';

import { UserProps } from '@/modules/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
   isLoading: boolean;
   user?: UserProps;
}
// user: undefined
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
      renameUser: (state: UserState, action: PayloadAction<string>) => {
         const name = action.payload;
         if (state.user)
            return {
               ...state,
               user: {
                  ...state.user,
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
