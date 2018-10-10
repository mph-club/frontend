import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000'
          },
        secondary: {
          
          main: '#077DF8'
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        textPrimary: {
          main: '#31DA62'
        },
        error: {
          // light: will be calculated from palette.primary.main,
          main: '#ff4400'
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
        display2: {
          fontWeight: 600,
          fontSize: "3rem" //48px
        },
        display1: {
          fontWeight: 600,
          fontSize: "2.25rem" //36px
        },
        headline: {
          fontWeight: 600,
          fontSize: "1.5rem", //24px
        },
        title: {
          fontWeight: 600,
          fontSize: "1.25rem", //20px
        },
        body2: {
          fontWeight: 400,
          fontSize: "1rem", //16px
        },
        body1: {
          fontWeight: 400,
          fontSize: ".875rem", //14px
        },
      },
});


//Color
const black = '#000000';
const green = '#31DA62';
const blue = '#077DF8';
const white = '#ffffff';
const grey01 = '#777777';
const grey02 = '#999999';
const grey03 = '#CCCCCC';
const grey04 = '#DDDDDD';
const grey05 = '#FAFAFA';
const red = '#ff4400';

export const palette = {
  black,
  green,
  blue,
  white,
  grey01,
  grey02,
  grey03,
  grey04,
  grey05,
  red
}

//Space 0 (0px), 1 (4px), 2 (8px), 3 (16px), 4 (32px) , 5 (64px), 6 (128px), 7 (256px)
export const space = [ 0, .25, .5, 1, 2, 4, 8, 16 ].map(n => n + 'rem');

export const CustomTheme = {
  palette,
  space
}