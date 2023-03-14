/**
 * @file types.ts
 * @author Liangxiaojun
 */

import {Dispatch, VivyModel} from 'vivy';

export type Unsubscription = () => any

export interface UnsubscriptionsMapObject {
    [nameSpace: string]: Unsubscription[];
}

export type Subscription = (params: any) => (dispatch: Dispatch, getState: () => any) => any

export interface VivySubscriptionModel extends VivyModel<any> {
    subscriptions?: Subscription[];
}
