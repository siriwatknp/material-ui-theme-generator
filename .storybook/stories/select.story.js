import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import withGithubTheme from '../decorators/withGithubTheme';
import withRelativeParent from '../decorators/withRelativeParent';
import { THEMES } from '../hierarchySeparators';

storiesOf(`${THEMES.GIT_HUB}|Select`, module)
  .addDecorator(withRelativeParent({ minWidth: 600, textAlign: 'center' }))
  .addDecorator(withGithubTheme)
  .addWithJSX('Default', () => (
    <Select
      value={'All'}
      renderValue={val => <span>Type: <b>{val}</b></span>}
      disableUnderline
      MenuProps={{
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        }
      }}
    >
      <MenuItem>
        All
      </MenuItem>
      <MenuItem>Public</MenuItem>
      <MenuItem>Private</MenuItem>
      <MenuItem>Sources</MenuItem>
    </Select>
  ));