import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import theme from 'theme/firebase';

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
});

export default story => (
  <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      {story()}
    </MuiThemeProvider>
  </JssProvider>
);
