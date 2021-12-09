import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistor, Store } from 'src/redux/Store';
import { Main } from 'src/app/Main';
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor}>
                <Main />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);