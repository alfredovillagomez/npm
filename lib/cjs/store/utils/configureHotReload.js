"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureHotReload = void 0;
const configureHotReload = (store, history, epicMiddleWare) => {
    if (module.hot && process.env.NODE_ENV === 'development') {
        const replaceReducerAndEpics = () => {
            const { createRootReducer } = require('../reducer');
            const { createRootEpic } = require('../epics');
            epicMiddleWare.run(createRootEpic());
            store.replaceReducer(createRootReducer(history));
        };
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducer', replaceReducerAndEpics);
        module.hot.accept('../epics', replaceReducerAndEpics);
    }
};
exports.configureHotReload = configureHotReload;
//# sourceMappingURL=configureHotReload.js.map