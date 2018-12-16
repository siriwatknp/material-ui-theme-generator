import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import atoms from 'components/atoms';

import { THEMES } from '../hierarchySeparators';

const { IconButton, Icon, Avatar } = atoms;

storiesOf(`${THEMES.FIRE_BASE}|Icon Button`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('No Padding', () => (
    <IconButton noPad>
      <Avatar src={'http://i.pravatar.cc/300'} />
    </IconButton>
  ))
  .addWithJSX('Separated', () => (
    <React.Fragment>
      <IconButton separated>
        <Icon front frontFlipped>settings</Icon>
        <Icon caret>arrow_drop_down</Icon>
      </IconButton>
      <IconButton separated>
        <Icon front>help</Icon>
        <Icon caret>arrow_drop_down</Icon>
      </IconButton>
    </React.Fragment>
  ))
  .addWithJSX('Invert Separated', () => (
    <div style={{ background: '#039be5' }}>
      <IconButton
        linkInverted
        separated
      >
        <Icon front frontFlipped>settings</Icon>
        <Icon caret>arrow_drop_down</Icon>
      </IconButton>
      <IconButton
        linkInverted
        separated
      >
        <Icon front>help</Icon>
        <Icon caret>arrow_drop_down</Icon>
      </IconButton>
    </div>
  ))
  .addWithJSX('with IconButton (default)', () => (
    <IconButton>
      <Icon>notifications</Icon>
    </IconButton>
  ))
  .addWithJSX('with IconButton (narrow)', () => (
    <IconButton shaded narrowPad>
      <Icon>close</Icon>
    </IconButton>
  ))
  .addWithJSX('with IconButton (no padding)', () => (
    <IconButton noPad>
      <Avatar
        small
        src={'http://i.pravatar.cc/300'}
      />
    </IconButton>
  ));
