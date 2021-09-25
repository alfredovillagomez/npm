"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRootEpic = void 0;
const redux_observable_1 = require("redux-observable");
const createRootEpic = (epics) => redux_observable_1.combineEpics(...epics);
exports.createRootEpic = createRootEpic;
//# sourceMappingURL=epics.js.map