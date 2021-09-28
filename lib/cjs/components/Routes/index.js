"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const format_message_1 = tslib_1.__importDefault(require("format-message"));
const Site_1 = tslib_1.__importDefault(require("../../screens/Site"));
const NotFoundPage = react_1.lazy(() => Promise.resolve().then(() => tslib_1.__importStar(require(/* webpackChunkName: 'app-core' */ '../../screens/NotFound'))));
const Routes = ({ routes }) => (react_1.default.createElement(Site_1.default, null,
    react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("h6", null,
            format_message_1.default('Loading'),
            "...") },
        react_1.default.createElement(react_router_dom_1.Switch, null,
            routes.map(route => react_1.default.createElement(react_router_dom_1.Route, { exact: true, component: route.component, key: route.path, path: route.path })),
            react_1.default.createElement(react_router_dom_1.Route, { component: NotFoundPage })))));
exports.default = Routes;
//# sourceMappingURL=index.js.map