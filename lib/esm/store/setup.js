import { createEpicMiddleware } from 'redux-observable';
import { createStore } from 'redux';
import { createRootReducer } from './reducer';
import { createRootEpic } from './epics';
import { getEnhancers, configureHotReload } from './utils';
import setupApollo from '../apollo/setup';
export default (history, reducers, epics, initialState) => {
    const apolloClient = setupApollo(process.env.GRAPHQL_URI || '/');
    const epicMiddleWare = createEpicMiddleware({
        dependencies: { client: apolloClient }
    });
    const enhancers = getEnhancers(history, epicMiddleWare);
    const store = createStore(createRootReducer(history, reducers), initialState, enhancers);
    epicMiddleWare.run(createRootEpic(epics));
    configureHotReload(store, history, epicMiddleWare);
    return store;
};
//# sourceMappingURL=setup.js.map