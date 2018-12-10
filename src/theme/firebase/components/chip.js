export default ({ muiBaseTheme, white }) => ({
  MuiChip: {
    root: {
      '&.chip--inverted': {
        backgroundColor: 'rgba(0,0,0,0.08)',
        '& .MuiChip-label': {
          color: white.primary,
        },
        '&:hover, &:active, &:focus': {
          backgroundColor: muiBaseTheme.palette.divider,
          '& .MuiChip-label': {
            color: white.text,
          },
        },
      },
      '&.chip--narrow': {
        '& .MuiChip-icon': {
          marginLeft: 2,
          marginRight: -muiBaseTheme.spacing.unit / 2,
        },
        '& .MuiChip-label': {
          fontSize: 14,
        },
      },
    },
  },
});
