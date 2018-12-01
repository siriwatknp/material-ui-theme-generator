import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
import withInstagramTheme from '../decorators/withInstagramTheme';
import withTwitterTheme from '../decorators/withTwitterTheme';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Badge from '@material-ui/core/Badge';

import GridOnOutlined from '@material-ui/icons/GridOnOutlined';
import BookmarkBorderOutlined from '@material-ui/icons/BookmarkBorderOutlined';
import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import Notification from '@material-ui/icons/NotificationsOutlined';
import Mail from '@material-ui/icons/MailOutline';

import { THEMES } from '../hierarchySeparators';

storiesOf(`${THEMES.TWITTER}|Tabs`, module)
  .addDecorator(withRelativeParent({ minWidth: 600, textAlign: 'center' }))
  .addDecorator(withTwitterTheme)
  .addWithJSX('Default', () => (
    <Tabs className={'tabs--underline'} value={0} fullWidth>
      <Tab label="Tweet" disableRipple />
      <Tab label="Tweets and Responses" disableRipple />
      <Tab label="Media" disableRipple />
      <Tab label="liking" disableRipple />
    </Tabs>
  ))
  .addWithJSX('Icon', () => (
    <Tabs value={0} fullWidth>
      <Tab
        icon={
          <Badge className={'badge--dotted'} badgeContent={''}>
            <Home />
          </Badge>
        }
        classes={{ wrapper: 'tab__icon' }}
        disableRipple
      />
      <Tab icon={<Search />} classes={{ wrapper: 'tab__icon' }} disableRipple />
      <Tab
        icon={
          <Badge className={'badge--number'} badgeContent={2}>
            <Notification />
          </Badge>
        }
        classes={{ wrapper: 'tab__icon' }}
        disableRipple
      />
      <Tab icon={<Mail />} classes={{ wrapper: 'tab__icon' }} disableRipple />
    </Tabs>
  ));

storiesOf(`${THEMES.INSTAGRAM}|Tabs`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withInstagramTheme)
  .addWithJSX('Default', () => (
    <Tabs value={2} centered>
      <Tab label="Posts" disableRipple icon={<GridOnOutlined />} />
      <Tab label="Saved" disableRipple icon={<BookmarkBorderOutlined />} />
      <Tab label="Tagged" disableRipple />
    </Tabs>
  ));

storiesOf(`${THEMES.FIRE_BASE}|Tabs`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Default', () => (
    <AppBar position={'static'} color={'default'} elevation={2}>
      <Tabs value={0} textColor={'primary'} indicatorColor={'primary'}>
        <Tab label="Users" disableRipple />
        <Tab label="Sign-in method" disableRipple />
        <Tab label="Templates" disableRipple />
      </Tabs>
    </AppBar>
  ))
  .addWithJSX('Inverted', () => (
    <AppBar position={'static'} elevation={2}>
      <Tabs value={0} className={'tabs--inverted'}>
        <Tab label="Users" disableRipple />
        <Tab label="Sign-in method" disableRipple />
        <Tab label="Templates" disableRipple />
      </Tabs>
    </AppBar>
  ));
