import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import atoms from 'components/atoms';

import { THEMES } from '../hierarchySeparators';

const { Chip, Icon } = atoms;

storiesOf(`${THEMES.FIRE_BASE}|Chip`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Inverted', () => (
    <div style={{ background: '#039be5', padding: 24 }}>
      <Chip
        inverted
        label="2 apps"
        icon={<Icon white>apps</Icon>}
        onClick={() => console.log('clicked')}
      />
      <Chip
        inverted
        label="Flood-It! Android"
        icon={<Icon contained purple>android</Icon>}
        onClick={() => console.log('clicked')}
      />
    </div>
  ));
