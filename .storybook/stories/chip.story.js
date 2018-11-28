import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import AppBar from '@material-ui/core/AppBar';
import Chip from '@material-ui/core/Chip';

import Android from '@material-ui/icons/Android';
import Apps from '@material-ui/icons/Apps'

import { THEMES } from '../hierarchySeparators';

storiesOf(`${THEMES.FIRE_BASE}|Chip`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Inverted', () => (
    <div style={{ background: '#039be5', padding: 24 }}>
      <Chip
        className={'chip--inverted'}
        label="2 apps"
        icon={<Apps className={'icon--white'} />}
        onClick={() => console.log('clicked')}
      />
      <Chip
        className={'chip--inverted'}
        label="Flood-It! Android"
        icon={<Android className={'icon--bg icon--purple'} />}
        onClick={() => console.log('clicked')}
      />
    </div>
  ));
