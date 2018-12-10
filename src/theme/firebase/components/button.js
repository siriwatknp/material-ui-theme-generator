export default ({ classes, linkInverted, muiBaseTheme, red, white }) => ({
  MuiButton: {
    root: {
      color: muiBaseTheme.palette.text.secondary,
      [classes.attach(classes.BUTTON.INVERTED)]: {
        borderColor: white.secondary,
        color: white.text,
      },
      [classes.attach(classes.BUTTON.INVERTED_HOVER)]: {
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
      '& .icon--left': {
        marginRight: muiBaseTheme.spacing.unit,
      },
      '& .icon--right': {
        marginLeft: muiBaseTheme.spacing.unit,
      },
    },
    outlined: {
      '&$disabled.button--inverted': {
        borderColor: white.text,
        color: white.text,
      },
    },
    contained: {
      boxShadow: muiBaseTheme.shadows[0],
      '&$focusVisible': {
        boxShadow: muiBaseTheme.shadows[0],
      },
      '&:active': {
        boxShadow: muiBaseTheme.shadows[0],
      },
      '&$disabled': {
        boxShadow: muiBaseTheme.shadows[0],
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
      color: muiBaseTheme.palette.common.white,
    },
    fab: {
      boxShadow: muiBaseTheme.shadows[2],
      '&:active': {
        boxShadow: muiBaseTheme.shadows[4],
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
            color: muiBaseTheme.palette.common.white,
          },
        },
      },
    },
  },
});
