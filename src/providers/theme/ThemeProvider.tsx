import { FC, useMemo } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { hexToRGB } from '../../helpers';
import GlobalStyle from './reset.ts';
import { BREAK_POINTS, COLORS } from './style';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ThemeProvider: FC<any> = ({ children }) => {

  const theme: DefaultTheme = useMemo(
    () => ({
      hexToRGB,
      breakpoints: BREAK_POINTS,
      colors: COLORS 
    }),
    []
  );

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
