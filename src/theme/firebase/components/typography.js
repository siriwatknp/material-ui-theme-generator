export default ({
  attach,
  nest,
  linked,
  linkInverted,
  muiBaseTheme,
  primary,
  TEXT,
  ICON,
}) => ({
  MuiTypography: {
    root: {
      [attach(TEXT.link)]: {
        ...linked,
        textDecoration: 'underline',
      },
      [`${attach(TEXT.link)}:hover`]: {
        cursor: 'pointer',
        color: primary.main,
      },
      [attach(TEXT.inline)]: {
        display: 'inline-block',
      },
      [attach(TEXT.indented)]: {
        marginLeft: muiBaseTheme.spacing.unit,
      },
      [attach(TEXT.indentedLg)]: {
        marginLeft: muiBaseTheme.spacing.unit * 3,
      },
      [attach(TEXT.bold)]: {
        fontWeight: 'bold',
      },
      [attach(TEXT.inverted)]: {
        color: muiBaseTheme.palette.common.white,
      },
      [attach(TEXT.linkInverted)]: linkInverted,
      [attach(TEXT.light)]: {
        opacity: 0.6,
      },
      [attach(TEXT.icon)]: {
        display: 'flex',
        alignItems: 'flex-end',
        [nest(ICON.root)]: {
          marginRight: muiBaseTheme.spacing.unit / 2,
        },
      },
      [attach(TEXT.icon, TEXT.inline)]: {
        display: 'inline-flex',
      },
    },
  },
});
