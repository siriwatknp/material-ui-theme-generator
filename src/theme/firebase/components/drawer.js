export default ({ drawer, primary, white }) => ({
  MuiDrawer: {
    paper: {
      minWidth: 256,
      background: '#18202c',
      '& *, & .MuiTypography-root': {
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
});
