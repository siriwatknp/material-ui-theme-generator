import React from 'react'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import muiTheme from 'theme/muiTheme'

export default story => (
  <MuiThemeProvider theme={muiTheme}>
    {story()}
  </MuiThemeProvider>
)
