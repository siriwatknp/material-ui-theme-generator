import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  text,
  boolean,
} from '@storybook/addon-knobs/react';

import Button from '@material-ui/core/Button'

import Create from '@material-ui/icons/Create'

import withRelativeParent from '../decorators/withRelativeParent'
import withFireBaseTheme from '../decorators/withFireBaseTheme'
import withInstagramTheme from '../decorators/withInstagramTheme'
import withTwitterTheme from '../decorators/withTwitterTheme'

import { THEMES } from '../hierarchySeparators';

storiesOf(`${THEMES.TWITTER}|Button`, module)
  .addDecorator(withRelativeParent({ minWidth: 180, textAlign: 'center' }))
  .addDecorator(withTwitterTheme)
  .addWithJSX('Outlined', () => (
    <Button
      color={'primary'}
      variant={'outlined'}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      fullWidth={boolean('fullWidth', false)}
    >
      {text('text', 'Follow')}
    </Button>
  ))
  .addWithJSX('Outlined - Large', () => (
    <Button
      color={'primary'}
      variant={'outlined'}
      className={'button--large'}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      fullWidth={boolean('fullWidth', false)}
    >
      {text('text', 'Edit Profile')}
    </Button>
  ))
  .addWithJSX('Extended FAB', () => (
    <Button
      variant={'extendedFab'}
      color={'primary'}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      fullWidth={boolean('fullWidth', false)}
    >
      <Create />{' '}
      {text('text', 'Tweet')}
    </Button>
  ))

storiesOf(`${THEMES.FIRE_BASE}|Button`, module)
  .addDecorator(withRelativeParent({ minWidth: 180, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Default', () => (
    <Button
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      fullWidth={boolean('fullWidth', false)}
    >
      {text('text', 'Button')}
    </Button>
  ))
  .addWithJSX('Primary', () => (
    <Button
      color={'primary'}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      fullWidth={boolean('fullWidth', false)}
    >
      {text('text', 'Button')}
    </Button>
  ))
  .addWithJSX('Primary + Outlined', () => (
    <Button
      color={'primary'}
      variant={'outlined'}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      fullWidth={boolean('fullWidth', false)}
    >
      {text('text', 'Button')}
    </Button>
  ))
  .addWithJSX('Primary + Contained', () => (
    <Button
      color={'primary'}
      variant={'contained'}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      fullWidth={boolean('fullWidth', false)}
    >
      {text('text', 'Button')}
    </Button>
  ))
  .addWithJSX('Danger', () => (
    <Button
      className={'button--danger'}
      variant={'contained'}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      fullWidth={boolean('fullWidth', false)}
    >
      {text('text', 'Button')}
    </Button>
  ))

storiesOf(`${THEMES.INSTAGRAM}|Button`, module)
  .addDecorator(withInstagramTheme)
  .addWithJSX('Default', () => (
    <Button>
      {text('text', 'Button')}
    </Button>
  ))
  .addWithJSX('Primary', () => (
    <Button disableRipple color={'primary'} variant={'contained'}>
      {text('text', 'Button')}
    </Button>
  ))