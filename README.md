[npm-image]: https://img.shields.io/npm/v/vivy-subscription.svg?style=flat-square

[npm-url]: https://npmjs.org/package/vivy-subscription

[license-image]: https://img.shields.io/npm/l/vivy-subscription.svg?style=flat-square

[vivy-url]: https://github.com/fatalxiao/vivy

[connected-react-router-url]: https://github.com/supasate/connected-react-router

[with-subscription-plugin-example-url]: https://github.com/fatalxiao/vivy-subscription/tree/main/examples/withSubscriptionPlugin

[pieb-with-dpe-frontend-url]: https://github.com/fatalxiao/pieb-with-dpe-frontend

# vivy-subscription

[![NPM Version][npm-image]][npm-url]
[![License][license-image]][npm-url]

A [Vivy][vivy-url] plugin which extend Vivy model to watch `history` or something else to update state by dispatching a
reducer or action.

* [Installation](#installation)
* [Examples](#examples)
    * [Examples in repository](#examples-in-repository)
    * [Complete and real project example](#complete-and-real-project-example)
* [Documentation](#documentation)
    * [Basic usage](#basic-usage)

## Installation

Using npm:

```shell
$ npm install vivy vivy-subscription
```

## Examples

### Examples in repository

```shell
$ cd ./examples/[EXAMPLE_NAME]
$ npm run start
```

**Example names**:

* [withSubscriptionPlugin][with-subscription-plugin-example-url]

### Complete and real project example

* [pieb-with-dpe-frontend][pieb-with-dpe-frontend-url]

## Documentation

### Basic usage

index.js

```js
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// Import Vivy
import Vivy from 'vivy';

// Import Vivy subscription plugin
import vivySubscription from 'vivy-subscription';

// Import your component and model
import App from 'path_to_app_component';
import app from 'path_to_app_model';

// Create vivy
const vivy = Vivy();

// Apply subscription plugin
vivy.use(vivySubscription());

// Create store after configuration
const store = vivy.createStore();

// Register vivy model
store.registerModel(app);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app-container')
);
```

app.js

```js
export default {
    nameSpace: 'app',
    state: null,
    subscriptions: {

        // Define a subscription
        yourSubscription: ({history}) => (dispatch, getState) => {
            // Bind history listening or do something else
        }

    }
};
```
