import variables, { primary, muiBaseTheme } from './variables';

const req = require.context('./components', true, /.js$/);
let overrides = {};

req.keys().forEach(filename => {
  overrides = {
    ...overrides,
    ...req(filename).default(variables),
  };
});

console.log('overrides', overrides)

const muiTheme = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary,
  },
  shape: {
    borderRadius: muiBaseTheme.spacing.unit,
  },
  overrides,
};

export default muiTheme;
