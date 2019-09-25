export enum ILocale {
  fr = "fr",
  nl = "nl",
}

export type LocaleValue = keyof typeof ILocale;

export const locales: LocaleValue[] = ["fr", "nl"];

export const defaultLocale = locales[0];

export function validateLocale(locale: any): LocaleValue {
  return locales.indexOf(locale) >= 0 ? locale : defaultLocale;
}
