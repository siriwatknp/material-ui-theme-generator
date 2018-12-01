import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
import withTwitterTheme from '../decorators/withTwitterTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'

import Notification from '@material-ui/icons/Notifications'
import Android from '@material-ui/icons/Android'
import CheckCircle from '@material-ui/icons/CheckCircle'
import ThumbUp from '@material-ui/icons/ThumbUp'
import Home from '@material-ui/icons/Home'

import { THEMES } from '../hierarchySeparators';

storiesOf(`${THEMES.TWITTER}|Icon`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withTwitterTheme)
  .addWithJSX('with Badge (Dot)', () => (
    <Badge className={'badge--dotted'} badgeContent={''}>
      <Home />
    </Badge>
  ))
  .addWithJSX('with Badge (Number)', () => (
    <Badge className={'badge--number'} badgeContent={2}>
      <Notification />
    </Badge>
  ));


storiesOf(`${THEMES.FIRE_BASE}|Icon`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Default', () => (
    <Notification color={select('color', ['default', 'primary', 'secondary', 'action', 'error', 'inherit'], 'default')} />
  ))
  .addWithJSX('Link', () => (
    <Notification className={'icon--link'} />
  ))
  .addWithJSX('Link Inverted', () => (
    <div style={{ display: 'inline-block', background: '#000000' }}>
      <Notification className={'icon--link-inverted'} />
    </div>
  ))
  .addWithJSX('Background', () => (
    <div style={{ display: 'inline-block' }}>
      <Android className={'icon--bg icon--red'} />
      <CheckCircle className={'icon--bg icon--primary'} />
      <ThumbUp className={'icon--bg icon--purple'} />
    </div>
  ))
  .addWithJSX('with IconButton', () => (
    <IconButton className={'icon-button--narrow-pad'}>
      <Notification
        className={'icon--link'}
      />
    </IconButton>
  ))
  .addWithJSX('with Badge', () => (
    <Badge className={'badge--dotted'} badgeContent={''}>
      <Notification />
    </Badge>
  ));
