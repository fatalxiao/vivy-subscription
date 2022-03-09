/**
 * @file testHistoryModel.js
 */

export default {
    nameSpace: 'testHistoryModel',
    state: null,
    reducers: {
        update: (state, {pathname}) => {
            return pathname;
        }
    },
    subscriptions: [
        ({history}) => (dispatch, getState) => history.listen(({pathname}) => dispatch({
            type: 'testHistoryModel/update',
            pathname
        }))
    ]
};
