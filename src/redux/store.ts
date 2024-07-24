'use client';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import urlSlice from './features/url';
import userSlice from './features/user';
export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    urlReducer: urlSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
