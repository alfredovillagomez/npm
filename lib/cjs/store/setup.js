"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const redux_observable_1 = require("redux-observable");
const redux_1 = require("redux");
const reducer_1 = require("./reducer");
const epics_1 = require("./epics");
const utils_1 = require("./utils");
const setup_1 = tslib_1.__importDefault(require("../apollo/setup"));
exports.default = (history, reducers, epics, initialState) => {
    const apolloClient = setup_1.default(process.env.GRAPHQL_URI || '/');
    const epicMiddleWare = redux_observable_1.createEpicMiddleware({
        dependencies: { client: apolloClient }
    });
    const enhancers = utils_1.getEnhancers(history, epicMiddleWare);
    const store = redux_1.createStore(reducer_1.createRootReducer(history, reducers), initialState, enhancers);
    epicMiddleWare.run(epics_1.createRootEpic(epics));
    utils_1.configureHotReload(store, history, epicMiddleWare);
    return store;
};
//# sourceMappingURL=setup.js.map