export default ({ muiBaseTheme, attach, APP_BAR, shade }) => ({
  MuiAppBar: {
    colorDefault: {
      backgroundColor: muiBaseTheme.palette.common.white,
    },
    root: {
      [attach(APP_BAR.shaded)]: {
        backgroundColor: shade.light,
      },
    },
  },
});
