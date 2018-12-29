import React from 'react';
import { storiesOf } from '@storybook/react';

import ProfilePage from 'pages/instagram/Profile'

storiesOf('Pages|Instagram', module)
  .addWithJSX('Profile Page', () => (
    <ProfilePage />
  ));
