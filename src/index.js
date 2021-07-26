/**
 * @file index.js
 */

// Vendors
import {connectRouter, routerMiddleware} from 'connected-react-router';

/**
 * Default Vivy router options
 * @type {{}}
 */
const DEFAULT_OPTIONS = {};

/**
 * Create Vivy router plugin
 * @param options
 * @returns {{}}
 */
export default function createVivyRouterPlugin(options = {}) {

    const op = {...DEFAULT_OPTIONS, ...options};

    const {history} = op;

    return {
        extraMiddlewares: [
            routerMiddleware(history)
        ],
        extraReducers: {
            router: connectRouter(history)
        }
    };

}
