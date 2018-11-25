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

const linked = {
  cursor: 'pointer',
  color: primary.main,
  display: 'inline-block',
};

const linkInverted = {
  ...linked,
  color: 'rgba(255,255,255,0.7)',
  '&:hover': {
    color: theme.palette.common.white,
  },
};

const muiTheme = {
  palette: {
    primary,
  },
  shape: {
    borderRadius: theme.spacing.unit,
  },
  overrides: {
    MuiAvatar: {
      root: {
        '&.avatar--small': {
          width: 32,
          height: 32,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: 8,
        '&.icon-button--shaded': {
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
        },
        '&.icon-button--no-pad': {
          padding: 0,
        },
        '&.icon-button--narrow-pad': {
          padding: 4,
        },
        '&.icon-button--separated': {
          position: 'relative',
          '& .icon__front': {
            transition: '0.15s ease',
          },
          '& .icon__caret': {
            transition: '0.15s ease',
            position: 'absolute',
            visibility: 'hidden',
            opacity: 0,
            right: 2,
          },
          '&:hover': {
            '& .icon__front': {
              transform: 'translateX(-6px)',
            },
            '& .icon__front--flipped': {
              transform: 'translateX(-6px) rotateZ(-20deg)',
            },
            '& .icon__caret': {
              visibility: 'visible',
              opacity: 1,
              right: -4,
            },
          },
        },
        '&.icon-button--link-inverted': {
          '& svg': linkInverted,
          '&:hover': {
            '& svg': {
              color: theme.palette.common.white,
            },
          },
        },
      },
    },
    MuiBadge: {
      root: {
        '&.badge--dotted': {
          '& .MuiBadge-badge': {
            width: 8,
            height: 8,
            backgroundColor: red.main,
            top: 3,
            right: 2,
          },
        },
      },
    },
    MuiSvgIcon: {
      root: {
        '&.icon--link-inverted': linkInverted,
        '&.icon--link': linked,
      },
    },
    MuiTypography: {
      root: {
        '&.text--link': {
          ...linked,
          textDecoration: 'underline',
        },
        '&.text--line': {
          display: 'inline-block',
        },
        '&.text--indented': {
          marginLeft: theme.spacing.unit,
        },
        '&.text--bold': {
          fontWeight: 'bold',
        },
        '&.text--inverted': {
          color: theme.palette.common.white,
        },
        '&.text--link-inverted': linkInverted,
        '&.text--light': {
          opacity: 0.6,
        },
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: theme.palette.common.white,
      },
      root: {
        '& .toolbar': {
          minHeight: 'auto',
        },
        '& .toolbar--narrow': {
          padding: '8px 24px',
        },
      },
    },
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
          '&:hover': {
            background: 'rgba(255,255,255,.08)',
          },
          '&.active': {
            '& .drawer__subcategory-icon *, .drawer__subcategory-text--primary': {
              color: primary.light,
            },
          },
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
        color: theme.palette.text.secondary,
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
        fontWeight: 500,
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
        textAlign: 'left',
        '& .MuiCardContent-root': {
          padding: '16px 20px 20px',
        },
        '& .card__media--wide-screen': {
          paddingTop: '56.5%',
        },
        '& .MuiCardActionArea-root': {
          width: '100%',
        },
        '& .card__actions--contained': {
          padding: 0,
          margin: 0,
          '& .MuiCardActions-action': {
            margin: 0,
            paddingTop: 12,
            paddingBottom: 12,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        },
        '&.card__root--actionable': {
          '& .MuiCardContent-root': {
            minHeight: 148,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& *': {
              color: primary.main,
            },
            '& .MuiSvgIcon-root': {
              fontSize: 40,
            },
          },
        },
        '&.card__root--color': {
          minHeight: 256,
          transition: 'box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&.space-grey': {
            background: '#303e45',
          },
          '&.dark-blue': {
            background: '#172568',
          },
          '&:hover': {
            boxShadow:
              '0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)',
          },
          '& .MuiCardMedia-root': {
            borderBottom: '1px solid rgba(255,255,255,.2)',
          },
          '& .MuiTypography-root': {
            fontWeight: 200,
          },
          '& *': {
            color: white.text,
          },
        },
      },
    },
  },
};

export default muiTheme;
