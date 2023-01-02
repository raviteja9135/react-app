import { configureStore } from '@reduxjs/toolkit';
import userDetailReducer from './userDetailsReducer'
export const userStore =  configureStore({
    reducer: {
        userDetailReducer: userDetailReducer
    }
});

export type RootState = ReturnType<typeof userStore.getState>;

export type AppDispatch = typeof userStore.dispatch;

