import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
          },
        secondary: {
          
          main: '#077DF8',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        error: {
          // light: will be calculated from palette.primary.main,
          main: '#ff4400',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        type: 'light'
      },

      typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
});

const green = '#31DA62';
const blue = '#077DF8';
const white = '#ffffff';

const palette = {
  green,
  blue,
  white
}

export const CustomTheme = {
  palette
}