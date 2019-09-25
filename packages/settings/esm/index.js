export var ILocale;
(function (ILocale) {
    ILocale["fr"] = "fr";
    ILocale["nl"] = "nl";
})(ILocale || (ILocale = {}));
export const locales = ["fr", "nl"];
export const defaultLocale = locales[0];
export function validateLocale(locale) {
    return locales.indexOf(locale) >= 0 ? locale : defaultLocale;
}
//# sourceMappingURL=index.js.map