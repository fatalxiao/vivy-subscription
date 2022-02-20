'use strict';

import React from 'react';
import Vivy from 'vivy';
import VivyRouter from 'vivy-router';
import VivySubscription from '../src';

// Models
import testModel from './mocks/testModel';

// History
import {createMemoryHistory} from 'history';

test('Use Vivy Subscription by memory history', () => {

    const history = createMemoryHistory();
    const vivy = Vivy();

    vivy.use(VivyRouter({
        history
    }));
    vivy.use(VivySubscription());

    const store = vivy.createStore();
    store.registerModel(testModel);

    expect(
        store.getState().testModel
    ).toEqual(
        null
    );

});
