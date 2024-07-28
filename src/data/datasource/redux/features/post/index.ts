'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '@/data/datasource/model/Post';
import { InitState } from '@/data/datasource/model/InitState';
import post from '@/presentation/components/reuse/post';

const initialState: InitState = {
  isLoading: true,
  data: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (_state, action: PayloadAction<Post | undefined>) => {
      return {
        isLoading: false,
        post: action.payload,
      };
    },
    resetPost: () => initialState,
  },
});

export default postSlice.reducer;
export const { setPost, resetPost } = postSlice.actions;
