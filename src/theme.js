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