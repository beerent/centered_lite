import { configureStore } from '@reduxjs/toolkit'
import UserReducer from 'src/redux/user/UserSlice'

export const Store = configureStore({
    reducer: {
        user: UserReducer
    },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;