'use strict';

import React from 'react';
import Vivy from 'vivy';
import VivyRouter from 'vivy-router';
import VivySubscription from '../src';

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

    expect(
        store.getState().testModel
    ).toEqual(
        null
    );

});
