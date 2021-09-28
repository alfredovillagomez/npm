"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRootReducer = void 0;
const redux_1 = require("redux");
const connected_react_router_1 = require("connected-react-router");
const createRootReducer = (appHistory, reducers) => redux_1.combineReducers({
    ...reducers.reduce((store, reducer) => reducer(store), {}),
    router: connected_react_router_1.connectRouter(appHistory),
});
exports.createRootReducer = createRootReducer;
//# sourceMappingURL=reducer.js.map