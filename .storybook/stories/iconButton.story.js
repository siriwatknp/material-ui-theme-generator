import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton'

import Notification from '@material-ui/icons/Notifications'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'

import Settings from '@material-ui/icons/Settings'
import Help from '@material-ui/icons/Help'
import Close from '@material-ui/icons/Close'

import { THEMES } from '../hierarchySeparators';

storiesOf(`${THEMES.FIRE_BASE}|Icon Button`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Default', () => (
    <IconButton className={'icon-button--no-pad'}>
      <Avatar src={'https://lh3.googleusercontent.com/-mYNSKSzYGjw/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-iqjXfnyDj9JzvyoC6QVVqJUyEXNA/s64-c-mo/photo.jpg'} />
    </IconButton>
  ))
  .addWithJSX('Separated', () => (
    <React.Fragment>
      <IconButton className={'icon-button--separated'}>
        <Settings className={'icon__front icon__front--flipped'} />
        <ArrowDropDown className={'icon__caret'} />
      </IconButton>
      <IconButton className={'icon-button--separated'}>
        <Help className={'icon__front'} />
        <ArrowDropDown className={'icon__caret'} />
      </IconButton>
    </React.Fragment>
  ))
  .addWithJSX('Invert Separated', () => (
    <div style={{ background: '#039be5' }}>
      <IconButton className={'icon-button--link-inverted icon-button--separated'}>
        <Settings className={'icon__front icon__front--flipped'} />
        <ArrowDropDown className={'icon__caret'} />
      </IconButton>
      <IconButton className={'icon-button--link-inverted icon-button--separated'}>
        <Help className={'icon__front'} />
        <ArrowDropDown className={'icon__caret'} />
      </IconButton>
    </div>
  ))
  .addWithJSX('with IconButton (default)', () => (
    <IconButton>
      <Notification />
    </IconButton>
  ))
  .addWithJSX('with IconButton (narrow)', () => (
    <IconButton className={'icon-button--shaded icon-button--narrow-pad'}>
      <Close />
    </IconButton>
  ))
  .addWithJSX('with IconButton (no padding)', () => (
    <IconButton className={'icon-button--no-pad'}>
      <Avatar className={'avatar--small'} src={'https://lh3.googleusercontent.com/-mYNSKSzYGjw/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-iqjXfnyDj9JzvyoC6QVVqJUyEXNA/s64-c-mo/photo.jpg'} />
    </IconButton>
  ))

