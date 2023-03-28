/**
 * @file testModel.ts
 */

// Types
import {VivyModel} from 'vivy';

export default <VivyModel<string>>{
    nameSpace: 'testModel',
    state: undefined,
    reducers: {
        update: (state, {pathname}) => {
            return pathname;
        }
    },
    subscriptions: [
        ({history}) => dispatch => history.listen(({pathname}) => dispatch({
            type: 'testModel/update',
            pathname
        }))
    ]
};
