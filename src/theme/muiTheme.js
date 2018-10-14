import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const muiTheme = {
  palette: {
    primary: {
      main: '#cf8ac6',
    },
    secondary: {
      main: '#ffeb3b',
    },
    // error: will use the default color
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: theme.shadows[0],
        '&$focusVisible': {
          boxShadow: theme.shadows[2],
        },
        '&:active': {
          boxShadow: theme.shadows[4],
        },
        '&$disabled': {
          boxShadow: theme.shadows[0],
        },
      },
      containedPrimary: {
        color: theme.palette.common.white,
      },
      fab: {
        boxShadow: theme.shadows[2],
        '&:active': {
          boxShadow: theme.shadows[6],
        },
      },
    },
  },
};

export default muiTheme;
