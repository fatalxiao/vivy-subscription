'use strict';

import Vivy from 'vivy';
import VivyRouter from 'vivy-router';
import VivySubscription from '../src';

// Models
import testHistoryModel from './mocks/testHistoryModel';

// History
import {createMemoryHistory} from 'history';

// Actions
import {push} from 'connected-react-router';

test('Use Vivy Subscription', () => {

    const history = createMemoryHistory();
    const vivy = Vivy();

    vivy.use(VivyRouter({
        history
    }));
    vivy.use(VivySubscription());

    const store = vivy.createStore();
    store.registerModel(testHistoryModel);

    expect(
        store.getState().testHistoryModel
    ).toEqual(
        null
    );

});

test('Use Vivy Subscription by memory history', () => {

    const history = createMemoryHistory();
    const vivy = Vivy();

    vivy.use(VivyRouter({
        history
    }));
    vivy.use(VivySubscription());

    const store = vivy.createStore();
    store.registerModel(testHistoryModel);

    const testRoute = '/test-route';

    store.dispatch(push(testRoute));

    expect(
        store.getState().testHistoryModel
    ).toEqual(
        testRoute
    );

});
