import React from 'react';
import { storiesOf } from '@storybook/react';

import AuthenPage from 'pages/firebase/AuthenPage';

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
  .addWithJSX('Authentication Page', () => (
    <Container>
      <AuthenPage />
    </Container>
  ));
