"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnhancers = void 0;
const redux_1 = require("redux");
const connected_react_router_1 = require("connected-react-router");
const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || redux_1.compose;
const getEnhancers = (history, epicMiddleware) => {
    const historyMiddleware = connected_react_router_1.routerMiddleware(history);
    const middlewares = [
        historyMiddleware,
        epicMiddleware,
    ];
    if (process.env.NODE_ENV === 'development') {
        const { createLogger } = require('redux-logger');
        middlewares.push(createLogger({
            collapsed: () => true,
        }));
    }
    return composeEnhancers(redux_1.applyMiddleware(...middlewares));
};
exports.getEnhancers = getEnhancers;
//# sourceMappingURL=getEnhancers.js.map