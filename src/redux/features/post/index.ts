'use client';

import { IPost } from '@/presentation/components/reuse/post/post';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitStateProps {
  isLoading: boolean;
  post?: IPost;
}

const initialState: InitStateProps = {
  isLoading: true,
  post: undefined,
};

export const userSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (_state, action: PayloadAction<IPost | undefined>) => {
      return {
        isLoading: false,
        post: action.payload,
      };
    },
    resetPost: () => initialState,
  },
});

export default userSlice.reducer;
export const { setPost, resetPost } = userSlice.actions;
