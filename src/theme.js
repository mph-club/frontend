import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
          },
        secondary: {
          // light: will be calculated from palette.primary.main,
          main: '#ff4400',
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
const space = [0, 1, 2]

export const CustomTheme = (
  space
)
