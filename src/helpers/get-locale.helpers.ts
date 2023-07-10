import { Locale } from '../providers/models';

export const getLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return Locale.ENGLISH;
  }

  return window.navigator.language.trim().split(/-|_/)[0] as Locale;
};
