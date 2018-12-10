import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const white = {
  text: '#ffffff',
  primary: 'rgba(255, 255, 255, 0.7)',
  secondary: 'rgba(255, 255, 255, 0.54)',
  disabled: 'rgba(255, 255, 255, 0.38)',
  hint: 'rgba(255, 255, 255, 0.24)',
};

const shade = {
  light: '#f5f5f5',
};

const red = {
  main: '#ff5252',
  dark: '#e04848',
};

const primary = {
  main: '#28a745',
};

const secondary = {
  main: '#e36209',
};

const drawer = {
  header: '#232f3e',
};

const linked = {
  cursor: 'pointer',
  color: '#0366d6',
  display: 'inline-block',
};

const linkInverted = {
  ...linked,
  color: white.primary,
  '&:hover': {
    color: theme.palette.common.white,
  },
};

const muiTheme = {
  typography: {
    useNextVariants: true,
    fontFamily:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
    fontSize: 14,
  },
  palette: {
    primary,
  },
  shape: {
    borderRadius: 3.5,
  },
  overrides: {
    MuiSelect: {
      select: {
        backgroundColor: '#eff3f6',
        backgroundImage: 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)',
        color: '#24292e',
        boxShadow: 'none',
        borderRadius: 3,
        '&:focus': {
          borderRadius: 3,
          backgroundColor: '#e9ecef',
          backgroundImage: 'none',
          borderColor: 'rgba(27,31,35,.35)',
          boxShadow: 'inset 0 0.15em 0.3em rgba(27,31,35,.15)',
        },
      },
    },
    MuiInput: {
      input: {
        backgroundColor: '#fff',
        backgroundPosition: 'right 8px center',
        border: '1px solid #d1d5da',
        lineHeight: '20px',
        minHeight: '34px',
        padding: '6px 8px',
        verticalAlign: 'middle',
        boxShadow: 'inset 0 1px 2px rgba(27,31,35,.075)',
        color: '#24292e',
        borderRadius: 3,
        fontSize: 14,
        boxSizing: 'border-box',
        '&:focus': {
          borderColor: '#2188ff',
          boxShadow:
            'inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3)',
          outline: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        borderBottom: '1px solid #d1d5da',
        '& .MuiTab-selected .MuiTab-wrapper *': {
          color: '#24292e',
          fontWeight: 600,
        },
      },
      indicator: {
        backgroundColor: secondary.main,
      },
    },
    MuiTab: {
      root: {
        marginRight: 16,
        minHeight: 55,
        minWidth: 0,
        [theme.breakpoints.up('md')]: {
          minWidth: 0,
        },
      },
      labelContainer: {
        width: '100%',
        padding: '16px 8px',
        paddingLeft: 8,
        paddingRight: 8,
        borderBottom: '2px solid transparent',
        [theme.breakpoints.up('md')]: {
          padding: '16px 8px',
          paddingLeft: 8,
          paddingRight: 8,
        },
        '&:hover': {
          borderBottomColor: '#d1d5da',
        },
      },
      textColorInherit: {
        opacity: 1,
      },
      label: {
        textTransform: 'none',
        color: '#586069',
        display: 'flex',
        lineHeight: 1.5,
        fontSize: 14,
        alignItems: 'center',
        fontWeight: 'normal',
        '& .MuiTypography-root': {
          color: '#586069',
          lineHeight: 1.5,
        },
        '& .MuiChip-root': {
          marginLeft: 4,
          backgroundColor: 'rgba(27,31,35,.08)',
          height: 'auto',
          '& .MuiChip-label': {
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            padding: '2px 5px',
          },
        },
      },
    },
    MuiButton: {
      root: {
        fontWeight: 600,
        lineHeight: '20px',
        padding: '6px 12px',
        textTransform: 'initial',
        minHeight: 'auto',
        color: '#24292e',
        '& svg': {
          fontSize: 16,
          marginLeft: -2,
          marginRight: theme.spacing.unit / 2,
        },
      },
      contained: {
        transition: 'none',
        boxShadow: 'none',
        border: '1px solid rgba(27,31,35,.2)',
        backgroundPosition: '-1px -1px',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '110% 110%',
        backgroundColor: '#eff3f6',
        backgroundImage: 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)',
        '&:hover': {
          backgroundColor: '#e6ebf1',
          backgroundImage: 'linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%)',
          backgroundPosition: '-0.5em',
          borderColor: 'rgba(27,31,35,.35)',
        },
        '&:active': {
          backgroundColor: '#e9ecef',
          backgroundImage: 'none',
          borderColor: 'rgba(27,31,35,.35)',
          boxShadow: 'inset 0 0.15em 0.3em rgba(27,31,35,.15)',
        },
      },
      containedPrimary: {
        backgroundColor: '#28a745',
        backgroundImage: 'linear-gradient(-180deg,#34d058,#28a745 90%)',
        '&:hover': {
          backgroundColor: '#269f42',
          backgroundImage: 'linear-gradient(-180deg,#2fcb53,#269f42 90%)',
        },
        '&:active': {
          backgroundColor: '#279f43',
          borderColor: 'rgba(27,31,35,.35)',
        },
      },
    },
  },
};

export default muiTheme;
