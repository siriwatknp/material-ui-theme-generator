import { css } from 'emotion';
import React from 'react';

import Navigator from 'pages/firebase/components/Navigator';
import Content from 'pages/firebase/components/Content';
import Header from 'pages/firebase/components/Header';

const AuthenPage = () => (
  <React.Fragment>
    <Navigator />
    <div className={css({ marginLeft: 256 })}>
      <Header />
      <Content />
    </div>
  </React.Fragment>
);

export default AuthenPage;
