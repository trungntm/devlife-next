import Palette from './palette';
import Typography from '../typography';
import { useMemo } from 'react';
import breakpoints from '../breakpoints';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';

export default function SfThemeCustomization({ children }) {
  const theme = Palette('light', 'default');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(
    "'Work Sans', sans-serif",
    14,
    300,
    400,
    700,
    700,
  );

  const themeOptions = useMemo(
    () => ({
      breakpoints: breakpoints,
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      typography: themeTypography,
    }),
    [theme, themeTypography],
  );

  const fontHeader = {
    color: themeOptions.palette.text.primary,
    fontWeight: themeOptions.typography.fontWeightMedium,
    fontFamily: "'Roboto Condensed', sans-serif",
    textTransform: 'uppercase',
  };

  const themes = createTheme({
    ...themeOptions,
    fontHeader,
    palette: {
      ...themeOptions.palette,
      background: {
        ...themeOptions.palette.background,
        default: themeOptions.palette.common.white,
        placeholder: grey[200],
      },
    },
    typography: {
      ...themeOptions.typography,
      fontHeader,
      h1: {
        ...themeOptions.typography.h1,
        ...fontHeader,
        letterSpacing: 0,
        fontSize: 60,
      },
      h2: {
        ...themeOptions.typography.h2,
        ...fontHeader,
        fontSize: 48,
      },
      h3: {
        ...themeOptions.typography.h3,
        ...fontHeader,
        fontSize: 42,
      },
      h4: {
        ...themeOptions.typography.h4,
        ...fontHeader,
        fontSize: 36,
      },
      h5: {
        ...themeOptions.typography.h5,
        ...fontHeader,
        fontSize: 24,
      },
      h6: {
        ...themeOptions.typography.h6,
        ...fontHeader,
        fontSize: 18,
      },
      subtitle1: {
        ...themeOptions.typography.subtitle1,
        fontSize: 18,
      },
      body1: {
        ...themeOptions.typography.body2,
        fontWeight: themeOptions.typography.fontWeightRegular,
        fontSize: 16,
      },
      body2: {
        ...themeOptions.typography.body1,
        fontSize: 14,
      },
    },
  });

  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
