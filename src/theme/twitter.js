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
  main: '#1da1f2',
  dark: '#1A91DA',
};

const linked = {
  cursor: 'pointer',
  color: primary.main,
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
    fontSize: 15,
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
  },
  palette: {
    primary,
  },
  shape: {
    borderRadius: theme.spacing.unit,
  },
  overrides: {
    MuiTouchRipple: {
      child: {
        backgroundColor: 'rgb(204,214,221)',
      },
    },
    MuiAvatar: {
      // size: 26.25px, 41.25px, 49px, 137px,
      root: {
        width: 41.25,
        height: 41.25,
        backgroundColor: '#fafafa',
        '&:after': {
          border: '1px solid rgba(0,0,0,0.0975)',
          borderRadius: '50%',
          bottom: 0,
          content: '" "',
          left: 0,
          pointerEvents: 'none',
          position: 'absolute',
          right: 0,
          top: 0,
        },
        '&.avatar--link': {
          cursor: 'pointer',
        },
        '&.avatar--small': {
          width: 26.25,
          height: 26.25,
        },
        '&.avatar--medium': {
          width: 49,
          height: 49,
        },
        '&.avatar--ultra-large': {
          width: 137,
          height: 137,
        },
        '&.avatar--bordered': {
          boxShadow: '0 0 0 4px #ffffff',
        },
      },
    },
    MuiTypography: {
      root: {
        '&.text--link': {
          ...linked,
        },
        '&.text--inline': {
          display: 'inline-block',
        },
        '&.text--indented': {
          marginLeft: theme.spacing.unit,
        },
        '&.text--indented-lg': {
          marginLeft: 20,
        },
        '&.text--bold': {
          fontWeight: 700,
        },
        '&.text--inverted': {
          color: theme.palette.common.white,
        },
        '&.text--link-inverted': linkInverted,
        '&.text--light': {
          color: 'rgb(101, 119, 134)',
        },
        '&.text--icon': {
          display: 'flex',
          alignItems: 'flex-end',
          '& .MuiSvgIcon-root': {
            marginRight: theme.spacing.unit / 2,
          },
        },
        '&.text--icon.text--inline': {
          display: 'inline-flex',
        },
        '&.text--link-hovered:hover': {
          cursor: 'pointer',
          color: primary.main,
        },
        '&.text--primary': {
          fontSize: 19,
          fontWeight: 700,
          lineHeight: 1.3125,
        },
        '&.text--secondary': {
          fontSize: 13,
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: 'rgb(230, 236, 240)',
      },
    },
    MuiListSubheader: {
      root: {
        fontSize: 19,
        fontWeight: 700,
        color: theme.palette.text.primary,
        padding: '0 15px',
        textAlign: 'left',
        lineHeight: '25px',
        borderBottom: '1px solid rgb(230, 236, 240)',
      },
      gutters: {
        [theme.breakpoints.up('sm')]: {
          padding: '10px 15px',
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
    },
    MuiListItemText: {
      root: {
        '& .text--tertiary': {
          fontSize: 13,
          paddingTop: 5,
          '& svg': {
            fontSize: 16,
            verticalAlign: 'text-bottom',
          },
        },
      },
      primary: {
        fontWeight: 700,
        lineHeight: 1.3125,
      },
      secondary: {
        lineHeight: 1.3125,
        color: 'rgb(101, 119, 134)',
      },
    },
    MuiListItem: {
      gutters: {
        padding: '15px 10px',
        paddingLeft: 10,
        paddingRight: 10,
        [theme.breakpoints.up('sm')]: {
          padding: '15px 10px',
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
      button: {
        '&:hover': {
          backgroundColor: '#F5F8FA',
        },
      },
      focusVisible: {
        backgroundColor: 'rgba(230, 236, 240, 0.7)',
      },
    },
    MuiList: {
      root: {
        background: white.text,
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiAppBar: {
      root: {
        '&.MuiPaper-root': {
          backgroundColor: white.text,
          '& .MuiListItem-root': {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
        '& .MuiToolbar-root': {
          minHeight: 53,
          maxWidth: 1000,
          padding: '0 10px',
          margin: 'auto',
          width: '100%',
        },
      },
    },
    MuiInput: {
      root: {
        borderRadius: 100,
        backgroundColor: '#E6ECF0',
        '& svg': {
          marginLeft: 12,
          fontSize: 20,
        },
        '& svg, & input::placeholder': {
          color: 'rgb(101, 119, 134)',
          opacity: 1,
        },
      },
      focused: {
        backgroundColor: white.text,
        border: `1px solid ${primary.main}`,
        '& input, & svg': {
          color: primary.main,
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: 26.25,
        '&.icon-text': {
          fontSize: 15,
        },
        '&.icon--light': {
          color: 'rgb(101, 119, 134)',
        },
      },
    },
    MuiBadge: {
      root: {
        '&.badge--dotted, &.badge--number': {
          '& .MuiBadge-badge': {
            color: white.text,
            backgroundColor: primary.main,
          },
        },
        '&.badge--dotted .MuiBadge-badge': {
          width: 6,
          height: 6,
          top: -4,
          right: 2,
        },
        '&.badge--number .MuiBadge-badge': {
          top: -6,
          right: -2,
          boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0.14rem',
          width: 15,
          height: 15,
          fontSize: 10.7,
        },
      },
      colorPrimary: {
        color: white.text,
      },
    },
    MuiTabs: {
      root: {
        '&.tabs--underline': {
          borderBottom: '1px solid #E6ECF0',
        },
        '& .MuiTab-selected .MuiTab-wrapper *': {
          color: primary.main,
        },
      },
      indicator: {
        backgroundColor: primary.main,
      },
    },
    MuiTab: {
      root: {
        minHeight: 53,
        minWidth: 0,
        [theme.breakpoints.up('md')]: {
          minWidth: 0,
        },
      },
      textColorInherit: {
        opacity: 1,
      },
      labelIcon: {},
      wrapper: {
        '&.tab__icon': {
          width: 'auto',
          padding: 8,
          borderRadius: 25,
          color: '#657786',
          '&:hover': {
            color: primary.main,
            backgroundColor: 'rgba(29, 161, 242, 0.1)',
          },
        },
        '& svg': {
          fontSize: 26.25,
        },
      },
      labelContainer: {
        width: '100%',
        padding: 15,
        [theme.breakpoints.up('md')]: {
          padding: 15,
        },
        '&:hover': {
          backgroundColor: 'rgba(29, 161, 242, 0.1)',
        },
      },
      label: {
        textTransform: 'none',
        fontSize: 15,
        fontWeight: 700,
        color: '#657786',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
        fontSize: 15,
        fontWeight: 700,
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
        borderRadius: 100,
        '&$disabled.button--inverted': {
          borderColor: white.text,
          color: white.text,
        },
      },
      outlinedPrimary: {
        minHeight: 30,
        padding: '0 1em',
        '&.button--large': {
          minHeight: 39,
        },
        borderColor: primary.main,
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
        '&.button--danger': {
          color: white.text,
          background: red.main,
        },
        '&.button--danger:hover': {
          background: red.dark,
        },
      },
      containedPrimary: {
        color: theme.palette.common.white,
      },
      extendedFab: {
        '& svg': {
          marginRight: theme.spacing.unit,
        },
      },
    },
  },
};

export default muiTheme;
