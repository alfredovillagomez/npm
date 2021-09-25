import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
export const createRootReducer = (appHistory, reducers) => combineReducers({
    ...reducers.reduce((store, reducer) => reducer(store), {}),
    router: connectRouter(appHistory),
});
//# sourceMappingURL=reducer.js.map