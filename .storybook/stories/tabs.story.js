import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { THEMES } from '../hierarchySeparators';

storiesOf(`${THEMES.FIRE_BASE}|Tabs`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Default', () => (
    <AppBar position={'static'} color={'default'} elevation={2}>
      <Tabs value={0} textColor={'primary'} indicatorColor={'primary'}>
        <Tab label="Users" disableRipple/>
        <Tab label="Sign-in method" disableRipple/>
        <Tab label="Templates" disableRipple/>
      </Tabs>
    </AppBar>
  ))
  .addWithJSX('Inverted', () => (
    <AppBar position={'static'} elevation={2}>
      <Tabs value={0} className={'tabs--inverted'}>
        <Tab label="Users" disableRipple/>
        <Tab label="Sign-in method" disableRipple/>
        <Tab label="Templates" disableRipple/>
      </Tabs>
    </AppBar>
  ))


