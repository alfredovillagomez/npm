import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory } from 'history';
import { ThemeProvider } from '@emotion/react';
import Routes from '../Routes';
import setupStore from '../../store/setup';
import { rootActionCreator } from '../../store/actions';
export const App = ({ actions, reducers, epics, routes }) => {
    rootActionCreator(actions);
    const history = createHashHistory();
    const store = setupStore(history, reducers, epics);
    return (React.createElement(Provider, { store: store },
        React.createElement(ThemeProvider, { theme: {} },
            React.createElement(ConnectedRouter, { history: history },
                React.createElement(Routes, { routes: routes })))));
};
export default App;
//# sourceMappingURL=index.js.map