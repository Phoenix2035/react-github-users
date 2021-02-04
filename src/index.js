import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';

import {
    Auth0Provider
} from '@auth0/auth0-react';


ReactDOM.render(
    <Auth0Provider
        domain="dev-cs97bp4p.us.auth0.com"
        clientId="HPltZFhTbenFDw5oKJr5PoQaIO8pKUlX"
        redirectUri={window.location.origin}
        cacheLocation={"localstorage"}
    >
        <Provider store={store}>
            <App/>
        </Provider>
    </Auth0Provider>,
    document.getElementById('root')
);