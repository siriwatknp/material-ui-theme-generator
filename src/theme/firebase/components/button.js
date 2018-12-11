export default ({
  attach,
  nest,
  BUTTON,
  ICON,
  ICON_BUTTON,
  linkInverted,
  muiBaseTheme,
  red,
  white,
}) => ({
  MuiButton: {
    root: {
      color: muiBaseTheme.palette.text.secondary,
      [attach(BUTTON.inverted)]: {
        borderColor: white.secondary,
        color: white.text,
        '&:hover': {
          borderColor: white.primary,
          background: white.hint,
        },
      },
    },
    label: {
      textTransform: 'none',
      letterSpacing: '0.25px',
      fontWeight: 'normal',
      '& svg': {
        fontSize: 20,
      },
      [nest(ICON.left)]: {
        marginRight: muiBaseTheme.spacing.unit,
      },
      [nest(ICON.right)]: {
        marginLeft: muiBaseTheme.spacing.unit,
      },
    },
    outlined: {
      [`&$disabled.${BUTTON.inverted}`]: {
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
      [attach(BUTTON.danger)]: {
        color: white.text,
        background: red.main,
        '&:hover': {
          background: red.dark,
        },
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
      [attach(ICON_BUTTON.shaded)]: {
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
      },
      [attach(ICON_BUTTON.noPad)]: {
        padding: 0,
      },
      [attach(ICON_BUTTON.narrowPad)]: {
        padding: 4,
      },
      [attach(ICON_BUTTON.separated)]: {
        position: 'relative',
        [nest(ICON.front)]: {
          transition: '0.15s ease',
        },
        [nest(ICON.caret)]: {
          transition: '0.15s ease',
          position: 'absolute',
          visibility: 'hidden',
          opacity: 0,
          right: 2,
        },
        '&:hover': {
          [nest(ICON.front)]: {
            transform: 'translateX(-6px)',
          },
          [nest(ICON.frontFlipped)]: {
            transform: 'translateX(-6px) rotateZ(-20deg)',
          },
          [nest(ICON.caret)]: {
            visibility: 'visible',
            opacity: 1,
            right: -4,
          },
        },
      },
      [attach(ICON_BUTTON.linkInverted)]: {
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
