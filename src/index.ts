/**
 * @file index.ts
 * @author Liangxiaojun
 */

// Types
import {VivyStore, VivyModelAction, VivyPlugin} from 'vivy';
import {UnsubscriptionsMapObject} from './types';

export * from './types';

/**
 * Create Vivy subscription plugin
 */
export default function VivySubscription(): VivyPlugin {

    // All unsubscriptions generated by subscriptions in models
    const unsubscriptions: UnsubscriptionsMapObject = {};

    /**
     * Register subscriptions in models
     * @param store
     * @param nameSpace
     * @param subscriptions
     */
    function registerSubscriptions(store: VivyStore, nameSpace: string, subscriptions: VivyModelAction[]) {

        if (!store || !nameSpace || !subscriptions || subscriptions.length < 1) {
            return;
        }

        subscriptions.forEach(subscription => {

            if (!unsubscriptions.hasOwnProperty(nameSpace)) {
                unsubscriptions[nameSpace] = [];
            }

            unsubscriptions[nameSpace].push(
                subscription({
                    history: store.history
                })(store.dispatch, store.getState)
            );

        });

    }

    /**
     * Unregister subscriptions in models
     * @param store
     * @param nameSpace
     */
    function unregisterSubscriptions(store: VivyStore, nameSpace: string) {

        if (
            !store || !nameSpace
            || !unsubscriptions?.[nameSpace] || unsubscriptions[nameSpace].length < 1
        ) {
            return;
        }

        unsubscriptions[nameSpace].forEach(unsubscription => unsubscription?.());

    }

    return {

        /**
         * Register subscriptions when register a Vivy model
         * @param model
         * @param store
         */
        onRegisterModel: (model, store) => {

            if (!model || !store) {
                return;
            }

            const {nameSpace, subscriptions} = model;

            // Register subscriptions
            if (subscriptions?.length > 0) {
                registerSubscriptions(store, nameSpace, subscriptions || []);
            }

        },

        /**
         * Unregister subscriptions when unregister a Vivy model
         * @param model
         * @param store
         */
        onUnregisterModel: (model, store) => {

            if (!model || !store) {
                return;
            }

            const {nameSpace, subscriptions} = model;

            // Unregister subscriptions
            if (subscriptions?.length > 0) {
                unregisterSubscriptions(store, nameSpace);
            }

        }

    };

}
