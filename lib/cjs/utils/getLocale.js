"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocale = void 0;
const getLocale = (navigator) => {
    const browserLocale = (navigator.languages && navigator.languages.length) ? (navigator.languages[0]) : navigator.language;
    if (/en/.test(browserLocale)) {
        return 'en';
    }
    if (/es/.test(browserLocale)) {
        return 'es';
    }
    return 'en';
};
exports.getLocale = getLocale;
exports.default = {
    getLocale: exports.getLocale
};
//# sourceMappingURL=getLocale.js.map