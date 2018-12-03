import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme';

import store from "./store/store.js";
import { Provider } from "react-redux";


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
