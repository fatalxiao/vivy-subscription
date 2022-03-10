/**
 * @file testModel.js
 */

export default {
    nameSpace: 'testModel',
    state: null,
    reducers: {
        update: (state, {pathname}) => {
            return pathname;
        }
    },
    subscriptions: [
        ({history}) => (dispatch, getState) => history.listen(({pathname}) => dispatch({
            type: 'testModel/update',
            pathname
        }))
    ]
};
