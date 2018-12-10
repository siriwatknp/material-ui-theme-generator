export default ({ primary, white }) => ({
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
});
