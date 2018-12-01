import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
// import withFireBaseTheme from '../decorators/withFireBaseTheme';
import withInstagramTheme from '../decorators/withInstagramTheme'
import withTwitterTheme from '../decorators/withTwitterTheme';

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

import Search from '@material-ui/icons/Search'

import { THEMES } from '../hierarchySeparators';

storiesOf(`${THEMES.TWITTER}|TextField`, module)
  .addDecorator(withRelativeParent({ minWidth: 500, textAlign: 'center' }))
  .addDecorator(withTwitterTheme)
  .addWithJSX('Outlined', () => (
    <TextField
      placeholder={'Search'}
      InputProps={{
        disableUnderline: true,
        startAdornment: <InputAdornment position="start"><Search /></InputAdornment>
      }}
    />
  ));

storiesOf(`${THEMES.INSTAGRAM}|TextField`, module)
  .addDecorator(withRelativeParent({ minWidth: 500, textAlign: 'center' }))
  .addDecorator(withInstagramTheme)
  .addWithJSX('Outlined', () => (
    <TextField
      variant={'outlined'}
      placeholder={'Search'}
      InputProps={{
        disableUnderline: true,
        startAdornment: <InputAdornment position="start"><Search /></InputAdornment>
      }}
    />
  ));
