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

export const green = '#31DA62';
export const blue = '#077DF8';

export const palette = {
  green,
  blue
}

export const CustomTheme = {
  palette
}