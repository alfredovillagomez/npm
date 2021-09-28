"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_redux_1 = require("react-redux");
const connected_react_router_1 = require("connected-react-router");
const history_1 = require("history");
const react_2 = require("@emotion/react");
const Routes_1 = tslib_1.__importDefault(require("../Routes"));
const setup_1 = tslib_1.__importDefault(require("../../store/setup"));
const actions_1 = require("../../store/actions");
const App = ({ actions, reducers, epics, routes }) => {
    actions_1.rootActionCreator(actions);
    const history = history_1.createHashHistory();
    const store = setup_1.default(history, reducers, epics);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(react_2.ThemeProvider, { theme: {} },
            react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: history },
                react_1.default.createElement(Routes_1.default, { routes: routes })))));
};
exports.App = App;
exports.default = exports.App;
//# sourceMappingURL=index.js.map