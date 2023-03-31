import { createTheme } from '@mui/material';
import { green, red } from '@mui/material/colors';

const Palette = mode => {
  return createTheme({
    palette: {
      primary: {
        light: '#69696a',
        main: '#28282a',
        dark: '#1e1e1f',
      },
      secondary: {
        light: '#fff5f8',
        main: '#ff3366',
        dark: '#e62958',
      },
      warning: {
        main: '#ffc071',
        dark: '#ffb25e',
      },
      error: {
        light: red[50],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[50],
        main: green[500],
        dark: green[700],
      },
      common: {
        black: '#474747',
        white: '#ffffff',
      },
    },
  });
};

export default Palette;
