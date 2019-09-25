"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ILocale;
(function (ILocale) {
    ILocale["fr"] = "fr";
    ILocale["nl"] = "nl";
})(ILocale = exports.ILocale || (exports.ILocale = {}));
exports.locales = ["fr", "nl"];
exports.defaultLocale = exports.locales[0];
function validateLocale(locale) {
    return exports.locales.indexOf(locale) >= 0 ? locale : exports.defaultLocale;
}
exports.validateLocale = validateLocale;
//# sourceMappingURL=index.js.map