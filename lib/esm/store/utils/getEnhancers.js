import { applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const getEnhancers = (history, epicMiddleware) => {
    const historyMiddleware = routerMiddleware(history);
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
    return composeEnhancers(applyMiddleware(...middlewares));
};
//# sourceMappingURL=getEnhancers.js.map