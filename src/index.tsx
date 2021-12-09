import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'src/redux/Store';
import { Main } from 'src/app/Main';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Main />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);