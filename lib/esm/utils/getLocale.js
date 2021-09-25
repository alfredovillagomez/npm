export var Locale;
(function (Locale) {
    Locale["EN"] = "en";
    Locale["ES"] = "es";
})(Locale || (Locale = {}));
export const getLocale = (navigator) => {
    const browserLocale = (navigator.languages && navigator.languages.length) ? (navigator.languages[0]) : navigator.language;
    if (/en/.test(browserLocale)) {
        return Locale.EN;
    }
    if (/es/.test(browserLocale)) {
        return Locale.ES;
    }
    return Locale.EN;
};
export default {
    getLocale
};
//# sourceMappingURL=getLocale.js.map