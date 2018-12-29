export default () => ({
  MuiAvatar: {
    // size: 34px, 44px, 50px, 152px,
    root: {
      width: 44,
      height: 44,
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
        width: 34,
        height: 34,
      },
      '&.avatar--medium': {
        width: 50,
        height: 50,
      },
      '&.avatar--ultra-large': {
        width: 152,
        height: 152,
      },
    },
  },
});
