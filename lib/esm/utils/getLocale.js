export const getLocale = (navigator) => {
    const browserLocale = (navigator.languages && navigator.languages.length) ? (navigator.languages[0]) : navigator.language;
    if (/en/.test(browserLocale)) {
        return 'en';
    }
    if (/es/.test(browserLocale)) {
        return 'es';
    }
    return 'en';
};
export default {
    getLocale
};
//# sourceMappingURL=getLocale.js.map