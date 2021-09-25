import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import t from 'format-message';
import Site from '../../screens/Site';
const NotFoundPage = lazy(() => import(/* webpackChunkName: 'app-core' */ '../../screens/NotFound'));
const Routes = ({ routes }) => (React.createElement(Site, null,
    React.createElement(Suspense, { fallback: React.createElement("h6", null,
            t('Loading'),
            "...") },
        React.createElement(Switch, null,
            routes.map(route => React.createElement(Route, { exact: true, component: route.component, key: route.path, path: route.path })),
            React.createElement(Route, { component: NotFoundPage })))));
export default Routes;
//# sourceMappingURL=index.js.map