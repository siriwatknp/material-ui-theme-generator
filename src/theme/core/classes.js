import convertToMui from './muiConverter';

const classes = {
  BUTTON: {
    INVERTED: 'button--inverted',
    INVERTED_HOVER: 'button--inverted:hover',
  },
  attach: className => `&.${className}`,
};

// export default convertToMui(classes);
export default classes
