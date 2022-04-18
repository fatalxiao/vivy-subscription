/**
 * @file index.js
 */

import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserHistory} from 'history';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';

// Models
import root from './modules/Root/models/root';
import a from './modules/A/models/a';
import b from './modules/B/models/b';
import c from './modules/C/models/c';

// Import Vivy
import Vivy from 'vivy';
import VivyRouter, {ConnectedRouter} from 'vivy-router';
import vivySubscription from 'vivy-subscription';

// Import route config
import {configureRoutes} from './routes';

// Create browser history
const history = createBrowserHistory();

// Create vivy
const vivy = Vivy();

// Apply router plugin
vivy.use(VivyRouter({
    history
}));

// Apply subscription plugin
vivy.use(vivySubscription());

// Create store after configuration
const store = vivy.createStore();

// Register vivy models
store.registerModels([
    root,
    a,
    b,
    c
]);

createRoot(document.getElementById('app-container')).render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {renderRoutes(configureRoutes())}
        </ConnectedRouter>
    </Provider>
);
