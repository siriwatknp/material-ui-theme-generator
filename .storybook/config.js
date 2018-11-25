import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';
import { withBackgroundColors, withCenteredPosition } from './decorators';
import 'sanitize.css/sanitize.css';

const req = require.context('./stories', true, /\.story\.js$/);

setDefaults({
  header: false,
});

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  name: 'Material-UI Themes',
  url: 'https://github.com/siriwatknp/material-ui-theme-generator',
});

setAddon(JSXAddon);

const loadStories = () => {
  addDecorator(withKnobs);
  addDecorator(withCenteredPosition);
  addDecorator(
    withBackgroundColors([
      {
        value: '#ffffff',
        defaultColor: true,
      },
      { value: '#000000' },
      { value: '#a5a5a5' },
    ])
  );

  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
