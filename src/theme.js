import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  dimensions: { 
    sidebarNormal: 256,
    sidebarMobile: 136,
  },
  palette: {
    primary: {
      main: '#3090fc',
    },
    secondary: {
      main: '#f090c0',
      contrastText: '#ffffff',
    },
  },
});