import React from 'react';
import { storiesOf } from '@storybook/react';

import AuthenPage from 'pages/firebase/AuthenPage';

import withFireBaseTheme from '../decorators/withFireBaseTheme';

const Container = ({ children }) => (
  <div
    style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#eceff1',
    }}
  >
    {children}
  </div>
);

storiesOf('Pages|Firebase', module)
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Authentication Page', () => (
    <Container>
      <AuthenPage />
    </Container>
  ));
