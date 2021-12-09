import { createStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducer from 'src/redux/Reducer';

const persistConfig = {
    key: "root",
    blacklist: ["loadingBar"],
    storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

export const Store = createStore(persistedReducer);
export const persistor = persistStore(Store);

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;