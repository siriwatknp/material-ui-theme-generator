import React from 'react'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import muiTheme from 'theme/muiTheme'

export default story => (
  <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
    {story()}
  </MuiThemeProvider>
)
