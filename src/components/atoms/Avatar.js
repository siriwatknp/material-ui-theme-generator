import React from 'react';
import cx from 'classnames';
import MuiAvatar from '@material-ui/core/Avatar';
import { AVATAR } from 'theme/core';

const Avatar = ({ className, small, ...props }) => (
  <MuiAvatar
    className={cx(AVATAR.root, className, small && AVATAR.small)}
    {...props}
  />
);

export default Avatar;
