import React from 'react';
import { Helmet } from 'react-helmet';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCompass,
  faUser,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { withBackgroundColors, withCenteredPosition } from './decorators';
import 'sanitize.css/sanitize.css';
import './material-icon.css';

const req = require.context('./stories', true, /\.story\.js$/);
const reqPages = require.context('./pages', true, /\.story\.js$/);

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

const withMaterialIcons = story => (
  <React.Fragment>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Helmet>
    {story()}
  </React.Fragment>
);

const loadStories = () => {
  addDecorator(withKnobs);
  addDecorator(withMaterialIcons);
  addDecorator(withCenteredPosition);
  addDecorator(
    withBackgroundColors([
      {
        value: 'rgb(230, 236, 240)',
      },
      {
        value: '#fafafa',
      },
      {
        value: '#ffffff',
        defaultColor: true,
      },
      { value: '#000000' },
      { value: '#a5a5a5' },
    ])
  );
  library.add(faInstagram, faCompass, faUser, faHeart);

  reqPages.keys().forEach(filename => reqPages(filename));
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
