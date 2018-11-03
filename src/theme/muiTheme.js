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
  main: '#039be5',
  light: '#4fc3f7',
};

const drawer = {
  header: '#232f3e',
};

const muiTheme = {
  palette: {
    primary,
  },
  shape: {
    borderRadius: theme.spacing.unit,
  },
  overrides: {
    MuiDrawer: {
      paper: {
        minWidth: 256,
        background: '#18202c',
        '& *': {
          color: white.primary,
        },
        '& .MuiList-root': {
          padding: 0,
        },
        '& .drawer__header, .drawer__header--actionable': {
          minHeight: 48,
          background: drawer.header,
          boxShadow: '0 -1px 0 #404854 inset',
        },
        '& .drawer__header--actionable': {
          minHeight: 56,
        },
        '& .drawer__header-logo': {
          width: 28,
          height: 28,
          marginLeft: -4,
        },
        '& .drawer__header-label': {
          height: 18,
          marginLeft: 12,
        },
        '& .drawer__category-container': {
          paddingBottom: 24,
          boxShadow: '0 -1px 0 #404854 inset',
        },
        '& .drawer__category': {
          padding: '20px 24px',
        },
        '& .drawer__category-text--primary': {
          color: white.text,
          letterSpacing: 1,
          fontSize: 14,
          fontFamily: "'Google Sans',sans-serif",
        },
        '& .drawer__subcategory': {
          padding: '6px 24px',
          '&:hover': {
            background: 'rgba(255,255,255,.08)',
          },
          '&.active': {
            '& *': {
              color: primary.light,
            },
          },
        },
        '& .drawer__subcategory-icon': {
          '& svg': {
            fontSize: 20,
          },
          margin: 0,
        },
        '& .drawer__subcategory-text--primary': {
          fontSize: 13,
          letterSpacing: 0.5,
        },
      },
    },
    MuiButton: {
      root: {
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
        letterSpacing: '0.25px',
        fontWeight: 'normal',
        '& svg': {
          fontSize: 20,
        },
        '& svg.left': {
          marginRight: theme.spacing.unit,
        },
        '& svg.right': {
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
      },
      fab: {
        boxShadow: theme.shadows[2],
        '&:active': {
          boxShadow: theme.shadows[4],
        },
      },
    },
    MuiCard: {
      root: {
        '& .MuiCardContent-root': {
          padding: 0,
        },
      },
    },
  },
};

export default muiTheme;
