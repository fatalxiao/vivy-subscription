/**
 * @file types.ts
 * @author Liangxiaojun
 */

export type Unsubscription = () => any

export interface UnsubscriptionsMapObject {
    [nameSpace: string]: Unsubscription[]
}
