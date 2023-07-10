export enum IColorMode {
  DARK = "dark",
  LIGHT = "light",
}

export enum Locale {
  FRENCH = "fr",
  GERMAN = "de",
  ENGLISH = "en",
  SPANISH = "es",
  ITALIAN = "it",
}

export interface ISettingsState {
  locale: Locale;
  soundEnabled: boolean;
  colorMode: IColorMode;
  receiveNotifications: boolean;
}
