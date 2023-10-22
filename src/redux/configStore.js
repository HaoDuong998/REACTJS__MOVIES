import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import phimSlice from './phimSlice';

export const store = configureStore({
    reducer: {
        userSlice,
        phimSlice,
    },
});