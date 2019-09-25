export declare enum ILocale {
    fr = "fr",
    nl = "nl"
}
export declare type LocaleValue = keyof typeof ILocale;
export declare const locales: LocaleValue[];
export declare const defaultLocale: "fr" | "nl";
export declare function validateLocale(locale: any): LocaleValue;
