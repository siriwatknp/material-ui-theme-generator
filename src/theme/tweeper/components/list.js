export default ({ muiBaseTheme, white, nest, ICON, TEXT }) => ({
  MuiListSubheader: {
    root: {
      fontSize: 19,
      fontWeight: 700,
      color: muiBaseTheme.palette.text.primary,
      padding: '0 15px',
      textAlign: 'left',
      lineHeight: '25px',
      borderBottom: '1px solid rgb(230, 236, 240)',
    },
    gutters: {
      [muiBaseTheme.breakpoints.up('sm')]: {
        padding: '10px 15px',
        paddingLeft: 10,
        paddingRight: 10,
      },
    },
  },
  MuiListItemText: {
    root: {
      [nest(TEXT.tertiary)]: {
        fontSize: 13,
        paddingTop: 5,
        [nest(ICON.root)]: {
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
      [muiBaseTheme.breakpoints.up('sm')]: {
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
});
