export default ({ muiBaseTheme, shade }) => ({
  MuiAppBar: {
    colorDefault: {
      backgroundColor: muiBaseTheme.palette.common.white,
    },
    root: {
      '& .toolbar': {
        minHeight: 'auto',
      },
      '& .toolbar--narrow': {
        padding: '8px 24px',
      },
      '&.app-bar--shaded': {
        backgroundColor: shade.light,
      },
    },
  },
});
