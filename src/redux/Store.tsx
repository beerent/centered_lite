import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import UserReducer from 'src/redux/user/UserSlice'

export const Store = configureStore({
    reducer: {
        user: UserReducer
    },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;