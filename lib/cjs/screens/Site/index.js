"use strict";
/** @jsx jsx */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_2 = require("@emotion/react");
const index_styles_1 = tslib_1.__importDefault(require("./index.styles"));
const Site = ({ children }) => (react_2.jsx("main", { css: index_styles_1.default.main, role: "main" },
    react_2.jsx(react_2.Global, { styles: index_styles_1.default.global }),
    children));
exports.default = react_1.default.memo(Site);
//# sourceMappingURL=index.js.map