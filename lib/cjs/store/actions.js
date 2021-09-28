"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootActionCreator = void 0;
const connected_react_router_1 = require("connected-react-router");
const rootActionCreator = (actions) => ({
    ...actions,
    router: connected_react_router_1.routerActions,
});
exports.rootActionCreator = rootActionCreator;
//# sourceMappingURL=actions.js.map