export const configureHotReload = (store, history, epicMiddleWare) => {
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
//# sourceMappingURL=configureHotReload.js.map