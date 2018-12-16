import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
import withTwitterTheme from '../decorators/withTwitterTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import Notification from '@material-ui/icons/Notifications';
import Home from '@material-ui/icons/Home';

import atoms from 'components/atoms';

import { THEMES } from '../hierarchySeparators';

const { Badge, IconButton, Icon } = atoms;

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
    <Icon
      // color={select(
      //   'color',
      //   ['default', 'primary', 'secondary', 'action', 'error', 'inherit'],
      //   'default'
      // )}
    >
      notifications
    </Icon>
  ))
  .addWithJSX('Link', () => <Notification className={'icon--link'} />)
  .addWithJSX('Link Inverted', () => (
    <div style={{ display: 'inline-block', background: '#000000' }}>
      <Icon linkInverted>notifications</Icon>
    </div>
  ))
  .addWithJSX('Background', () => (
    <div style={{ display: 'inline-block' }}>
      <Icon contained red >android</Icon>
      <Icon contained primary >check_circle</Icon>
      <Icon contained purple >thumb_up</Icon>
    </div>
  ))
  .addWithJSX('with IconButton', () => (
    <IconButton narrowPad>
      <Icon link>notifications</Icon>
    </IconButton>
  ))
  .addWithJSX('with Badge', () => (
    <Badge dotted badgeContent={''}>
      <Icon link>notifications</Icon>
    </Badge>
  ));
