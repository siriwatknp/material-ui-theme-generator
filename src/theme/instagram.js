import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const white = {
  text: '#ffffff',
  primary: 'rgba(255, 255, 255, 0.7)',
  secondary: 'rgba(255, 255, 255, 0.54)',
  disabled: 'rgba(255, 255, 255, 0.38)',
  hint: 'rgba(255, 255, 255, 0.24)',
};

const red = {
  main: '#ff5252',
  dark: '#e04848',
};

const primary = {
  main: '#3897f0',
};

// const drawer = {
//   header: '#232f3e',
// };

const muiTheme = {
  palette: {
    primary,
  },
  typography: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  },
  shape: {
    borderRadius: theme.spacing.unit / 2,
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '5px 9px',
        border: '1px solid transparent',
        minHeight: 30,
        '&.inverted': {
          borderColor: white.secondary,
          color: white.text,
        },
        '&.inverted:hover': {
          borderColor: white.primary,
          background: white.hint,
        },
      },
      label: {
        textTransform: 'none',
        fontWeight: 600,
        lineHeight: '18px',
        '& svg': {
          fontSize: 20,
        },
        '& .icon--left': {
          marginRight: theme.spacing.unit,
        },
        '& .icon--right': {
          marginLeft: theme.spacing.unit,
        },
      },
      outlined: {
        '&$disabled.inverted': {
          borderColor: white.text,
          color: white.text,
        },
      },
      contained: {
        borderColor: primary.main,
        boxShadow: theme.shadows[0],
        '&$focusVisible': {
          boxShadow: theme.shadows[0],
        },
        '&:active': {
          boxShadow: theme.shadows[0],
        },
        '&$disabled': {
          boxShadow: theme.shadows[0],
        },
        '&.danger': {
          color: white.text,
          background: red.main,
        },
        '&.danger:hover': {
          background: red.dark,
        },
      },
      containedPrimary: {
        color: theme.palette.common.white,
        '&:hover': {
          backgroundColor: primary.main,
        },
        '&:active': {
          opacity: 0.6,
        },
      },
      fab: {
        boxShadow: theme.shadows[2],
        '&:active': {
          boxShadow: theme.shadows[4],
        },
      },
    },
  },
};

export default muiTheme;
