import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  text,
  boolean,
} from '@storybook/addon-knobs/react';

import Button from '@material-ui/core/Button'

import Create from '@material-ui/icons/Create'
import BookOutlined from '@material-ui/icons/BookOutlined'

import withRelativeParent from '../decorators/withRelativeParent'
import withFireBaseTheme from '../decorators/withFireBaseTheme'
import withInstagramTheme from '../decorators/withInstagramTheme'
import withTwitterTheme from '../decorators/withTwitterTheme'
import withGithubTheme from '../decorators/withGithubTheme'

import { THEMES } from '../hierarchySeparators';

import { classes } from 'theme/core'

storiesOf(`${THEMES.GIT_HUB}|Button`, module)
  .addDecorator(withRelativeParent({ minWidth: 180, textAlign: 'center' }))
  .addDecorator(withGithubTheme)
  .addWithJSX('Contained', () => (
    <Button
      variant={'contained'}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', true)}
      fullWidth={boolean('fullWidth', false)}
    >
      {text('text', 'Edit Bio')}
    </Button>
  ))
  .addWithJSX('Contained (primary)', () => (
    <Button
      color={'primary'}
      variant={'contained'}
      className={'button--large'}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      fullWidth={boolean('fullWidth', false)}
    >
      <BookOutlined />
      {text('text', 'New')}
    </Button>
  ))

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
  .addWithJSX('Inverted', () => (
    <Button
      variant={'outlined'}
      className={classes.BUTTON.INVERTED}
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