"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocale = exports.Locale = void 0;
var Locale;
(function (Locale) {
    Locale["EN"] = "en";
    Locale["ES"] = "es";
})(Locale = exports.Locale || (exports.Locale = {}));
const getLocale = (navigator) => {
    const browserLocale = (navigator.languages && navigator.languages.length) ? (navigator.languages[0]) : navigator.language;
    if (/en/.test(browserLocale)) {
        return Locale.EN;
    }
    if (/es/.test(browserLocale)) {
        return Locale.ES;
    }
    return Locale.EN;
};
exports.getLocale = getLocale;
exports.default = {
    getLocale: exports.getLocale
};
//# sourceMappingURL=getLocale.js.map