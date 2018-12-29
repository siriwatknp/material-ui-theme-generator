import React from 'react';
import { storiesOf } from '@storybook/react';

import ProfilePage from 'pages/tweeper/Profile'

storiesOf('Pages|Tweeper', module)
  .addWithJSX('Profile Page', () => (
    <ProfilePage />
  ));
