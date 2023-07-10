// import original module declarations
import "styled-components";

export const BREAKPOINT_SIZES = {
  xs: 320,
  xx: 357,
  sm: 563,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const BREAK_POINTS = {
  xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  sm: `(min-width: ${BREAKPOINT_SIZES.xs}px and max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(min-width: ${BREAKPOINT_SIZES.sm}px and max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(min-width: ${BREAKPOINT_SIZES.md}px and max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xl: `(min-width: ${BREAKPOINT_SIZES.lg}px and max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  xxAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xx}px)`,
  smAndSmaller: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  mdAndSmaller: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lgAndSmaller: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xlAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsAndLarger: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
  smAndLarger: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  mdAndLarger: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
  lgAndLarger: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
  xlAndLarger: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
  mobile: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  desktop: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
};

// All app colors
export enum COLORS {
  PRIMARY = "#FFFFFF",
  SECONDARY = "#C4C4C4",
  TERTIARY = "#848895",
  SUCCESS = "#42ba96",
  INFO = "#b45be1",
  WARNING = "#d83aeb",
  DANGER = "#43b5c5",
  GRAY_100 = "#f9fdfc",
  GRAY_200 = "#f1f8f6",
  GRAY_300 = "#d9efe7",
  GRAY_400 = "#c6e6de",
  GRAY_500 = "#abd5c6",
  GRAY_600 = "#86b8b6",
  GRAY_700 = "#409088",
  GRAY_800 = "#387462",
  GRAY_900 = "#1b4e3f",
  BACKGROUND = "#000000",
}

export const COLOR_SWAP_TRANSITION_DURATION = 350;

declare module "styled-components" {
  export interface DefaultTheme {
    // App break points
    breakpoints: typeof BREAK_POINTS;
    // All Global App Colors typings
    colors: typeof COLORS;
    // Toggle App theme
    hexToRGB: (color: string, opacity: number) => string;
  }
}
