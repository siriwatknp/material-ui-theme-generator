import React from 'react';
import styled, { css } from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withFireBaseTheme from '../decorators/withFireBaseTheme';

import Navigator from './firebase/Navigator';
import Header from './firebase/Header';
import Content from './firebase/Content';

const Container = styled('div')({
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: '#eceff1',
});

storiesOf('Pages|Firebase', module)
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Authen', () => (
    <Container>
      <Navigator />
      <div className={css({ marginLeft: 256 })}>
        <Header />
        <Content />
      </div>
    </Container>
  ));
